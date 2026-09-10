/**
 * Cuenta regresiva de secciones bloqueadas (Programa, Ponentes, etc.).
 *
 * El desenfoque se levanta solo cuando llega la fecha objetivo
 * (23 de septiembre de 2026, 12h00 de Ecuador). Funciona en dos capas:
 *
 *  1. En el build, Astro ya decide si pinta o no la cortina.
 *  2. En el navegador, este módulo la retira en vivo al cumplirse la hora,
 *     sin que nadie tenga que recargar.
 *
 * Nota honesta: es una cortina visual, no un control de acceso. El contenido
 * viaja en el HTML. Si algún dato no puede verse antes de tiempo, no debe
 * publicarse hasta esa fecha.
 *
 * Soporta varias cortinas en la misma página a la vez (por ejemplo,
 * Programa y Ponentes), cada una con su propio reloj independiente.
 */

type Unidad = { clave: 'dias' | 'horas' | 'minutos' | 'segundos'; valor: number };

function descomponer(ms: number): Unidad[] {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    { clave: 'dias', valor: Math.floor(total / 86400) },
    { clave: 'horas', valor: Math.floor((total % 86400) / 3600) },
    { clave: 'minutos', valor: Math.floor((total % 3600) / 60) },
    { clave: 'segundos', valor: total % 60 },
  ];
}

export function iniciarCuentaRegresiva(): void {
  // :not([data-cortina-iniciada]) evita duplicar temporizadores si el
  // script llega a ejecutarse más de una vez para la misma cortina.
  const cortinas = document.querySelectorAll<HTMLElement>(
    '[data-cortina]:not([data-cortina-iniciada])',
  );

  cortinas.forEach((cortina) => {
    cortina.setAttribute('data-cortina-iniciada', '');
    iniciarUnaCortina(cortina);
  });
}

function iniciarUnaCortina(cortina: HTMLElement): void {
  const objetivoIso = cortina.dataset.revelaEn ?? '';
  const objetivo = Date.parse(objetivoIso);

  // Fecha mal escrita: se prefiere mostrar el contenido antes que dejarlo oculto.
  if (Number.isNaN(objetivo)) {
    revelar(cortina);
    return;
  }

  const casillas = new Map<string, HTMLElement>();
  cortina.querySelectorAll<HTMLElement>('[data-unidad]').forEach((el) => {
    const clave = el.dataset.unidad;
    if (clave) casillas.set(clave, el);
  });

  const tic = () => {
    const restante = objetivo - Date.now();

    if (restante <= 0) {
      revelar(cortina);
      window.clearInterval(temporizador);
      return;
    }

    for (const { clave, valor } of descomponer(restante)) {
      const casilla = casillas.get(clave);
      if (!casilla) continue;
      const texto = clave === 'dias' ? String(valor) : String(valor).padStart(2, '0');
      // textContent, nunca innerHTML.
      if (casilla.textContent !== texto) casilla.textContent = texto;
    }
  };

  tic();
  const temporizador = window.setInterval(tic, 1000);

  // Al volver de segundo plano el reloj puede haberse quedado atrás.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') tic();
  });
}

function revelar(cortina: HTMLElement): void {
  cortina.parentElement?.removeAttribute('data-bloqueado');
  cortina.classList.add('cortina--fuera');
  window.setTimeout(() => cortina.remove(), 700);
}
