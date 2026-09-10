/**
 * Barra de progreso de lectura.
 * Sustituye visualmente a la barra de scroll, que está oculta por CSS.
 */
export function iniciarProgreso(): void {
  const barra = document.querySelector<HTMLElement>('[data-progreso]');
  if (!barra) return;

  let pendiente = false;

  const pintar = () => {
    pendiente = false;
    const alto = document.documentElement.scrollHeight - window.innerHeight;
    const avance = alto > 0 ? Math.min(1, Math.max(0, window.scrollY / alto)) : 0;
    barra.style.transform = `scaleX(${avance.toFixed(4)})`;
  };

  const alDesplazar = () => {
    if (pendiente) return;
    pendiente = true;
    window.requestAnimationFrame(pintar);
  };

  window.addEventListener('scroll', alDesplazar, { passive: true });
  window.addEventListener('resize', alDesplazar, { passive: true });
  pintar();
}
