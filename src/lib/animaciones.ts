/**
 * Animaciones de entrada sensibles a la dirección del scroll.
 *
 * - Bajando: los bloques suben desde abajo.
 * - Subiendo: los bloques bajan desde arriba.
 *
 * La dirección se guarda en `data-dir` del <html> y el CSS decide el desplazamiento.
 * Si algo falla (navegador antiguo, IntersectionObserver ausente, JS con error),
 * un plan B revela todo el contenido: la página nunca se queda en blanco.
 */

const MARGEN = '0px 0px -8% 0px';

function revelarTodo(): void {
  document
    .querySelectorAll<HTMLElement>('[data-anim]')
    .forEach((el) => el.classList.add('visible'));
}

export function iniciarAnimacionesScroll(): void {
  const raiz = document.documentElement;
  const elementos = Array.from(document.querySelectorAll<HTMLElement>('[data-anim]'));
  if (elementos.length === 0) return;

  const sinMovimiento =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (sinMovimiento || typeof IntersectionObserver === 'undefined') {
    revelarTodo();
    return;
  }

  // --- dirección del scroll -------------------------------------------------
  let ultimaY = window.scrollY;
  let pendiente = false;

  const actualizarDireccion = () => {
    pendiente = false;
    const y = window.scrollY;
    if (Math.abs(y - ultimaY) > 4) {
      raiz.setAttribute('data-dir', y > ultimaY ? 'down' : 'up');
      ultimaY = y;
    }
  };

  raiz.setAttribute('data-dir', 'down');
  window.addEventListener(
    'scroll',
    () => {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(actualizarDireccion);
    },
    { passive: true },
  );

  // --- observador -----------------------------------------------------------
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        const el = entrada.target as HTMLElement;

        if (entrada.isIntersecting) {
          el.classList.add('visible');
          // `una-vez` deja el bloque fijo tras aparecer (útil en textos largos).
          if (el.dataset.anim === 'una-vez') observador.unobserve(el);
          continue;
        }

        // Fuera de pantalla vuelve a su estado inicial para que la animación
        // se repita al regresar, tanto bajando como subiendo.
        if (el.dataset.anim !== 'una-vez') el.classList.remove('visible');
      }
    },
    { threshold: 0.12, rootMargin: MARGEN },
  );

  elementos.forEach((el) => observador.observe(el));

  // Plan B: si en 2,5 s algo quedó invisible por encima del pliegue, se muestra.
  window.setTimeout(() => {
    elementos.forEach((el) => {
      const caja = el.getBoundingClientRect();
      if (caja.top < window.innerHeight && caja.bottom > 0) el.classList.add('visible');
    });
  }, 2500);
}
