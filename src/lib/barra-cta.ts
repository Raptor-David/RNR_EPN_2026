/**
 * Barra fija de inscripción.
 *
 * Aparece cuando el visitante ya pasó el primer pliegue y desaparece
 * mientras el bloque grande de inscripción está a la vista: nunca se
 * muestran dos llamados a la acción al mismo tiempo.
 */
export function iniciarBarraCta(): void {
  const barra = document.querySelector<HTMLElement>('[data-barra-cta]');
  const seccion = document.querySelector<HTMLElement>('[data-cta-seccion]');
  if (!barra) return;

  barra.hidden = false;

  let ctaVisible = false;

  if (seccion && typeof IntersectionObserver !== 'undefined') {
    new IntersectionObserver(
      (entradas) => {
        ctaVisible = entradas.some((e) => e.isIntersecting);
        evaluar();
      },
      { threshold: 0.25 },
    ).observe(seccion);
  }

  let pendiente = false;

  const evaluar = () => {
    pendiente = false;
    const pasoElPliegue = window.scrollY > window.innerHeight * 0.7;
    if (pasoElPliegue && !ctaVisible) barra.setAttribute('data-visible', '');
    else barra.removeAttribute('data-visible');
  };

  window.addEventListener(
    'scroll',
    () => {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(evaluar);
    },
    { passive: true },
  );

  evaluar();
}
