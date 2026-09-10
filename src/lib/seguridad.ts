/**
 * Utilidades de seguridad del lado del cliente.
 *
 * El sitio es estático y no tiene backend, así que la superficie de ataque
 * real se reduce a tres cosas: lo que llega por la URL, lo que se inserta en
 * el DOM y los enlaces externos. Aquí se cubren las tres.
 */

import { anclasValidas } from '../data/sitio';

/** Solo letras, números y guiones: nada de `<`, comillas ni `javascript:`. */
const ANCLA_VALIDA = /^[a-z0-9-]{1,40}$/;

/** Caracteres de control (C0 y C1) que nunca deben viajar en un texto. */
const CONTROLES = /[\u0000-\u001F\u007F-\u009F]/g;

/**
 * Neutraliza el fragmento de la URL cuando no corresponde a una sección real.
 * Evita que un `#` manipulado llegue a cualquier consumidor del hash y que un
 * enlace externo empuje al visitante a un ancla inventada.
 */
export function asegurarAnclaSegura(): void {
  const bruto = window.location.hash.slice(1);
  if (!bruto) return;

  let ancla = '';
  try {
    ancla = decodeURIComponent(bruto).toLowerCase();
  } catch {
    ancla = '';
  }

  const esLegitima = ANCLA_VALIDA.test(ancla) && anclasValidas.includes(ancla);
  if (esLegitima) return;

  // Se limpia sin recargar ni saltar la página.
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}

/**
 * Escapa texto antes de colocarlo en el DOM.
 * Regla del proyecto: nunca usar innerHTML con datos variables.
 * Si algún día hiciera falta, el valor pasa primero por aquí.
 */
export function escaparHtml(valor: unknown): string {
  return String(valor ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Limpia el contenido de un campo de formulario: normaliza, descarta
 * caracteres de control y de etiqueta, recorta y limita la longitud.
 * Queda listo para cuando el sitio incorpore un formulario propio.
 */
export function limpiarEntrada(valor: string, maximo = 200): string {
  return String(valor ?? '')
    .normalize('NFC')
    .replace(CONTROLES, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maximo);
}

/** Acepta únicamente http(s): bloquea `javascript:`, `data:` y `vbscript:`. */
export function esUrlSegura(url: string): boolean {
  try {
    const protocolo = new URL(url, window.location.origin).protocol;
    return protocolo === 'https:' || protocolo === 'http:';
  } catch {
    return false;
  }
}
