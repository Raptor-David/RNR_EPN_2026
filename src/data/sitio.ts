/**
 * Configuracion general del sitio.
 * Todo lo que se cambia con frecuencia vive aqui: fechas, enlaces, contactos.
 */

export const sitio = {
  nombre: 'Reunión Nacional de Ramas 2026',
  nombreCorto: 'RNR Quito 2026',
  edicion: 'XXII',
  descripcion:
    'XXII Reunión Nacional de Ramas Estudiantiles IEEE. Del 25 al 27 de septiembre de 2026 en la Escuela Politécnica Nacional, Quito, Ecuador.',
  organiza: 'Rama Estudiantil EPN · IEEE Ecuador Section',
  fechas: '25 – 27 de septiembre de 2026',
  fechasLargas: '25, 26 y 27 de septiembre de 2026',
  sede: 'Escuela Politécnica Nacional · Quito, Ecuador',
  idioma: 'es-EC',
} as const;

/**
 * Momento exacto en que se revela el programa.
 * 23 de septiembre de 2026, 12h00 (medio día) hora de Ecuador (UTC-5).
 * El desenfoque se retira solo, tanto en el build como en el navegador.
 */
export const revelacionPrograma = '2026-09-23T12:00:00-05:00';

/** Enlace del formulario de inscripción (Google Forms). */
export const inscripcion = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLScoRfx6mwZ13Cc6TyCiLo3Tdk5GAkT8pnRPeY-j6BGH964ISg/viewform',
  cupos: '150 asistentes',
} as const;

/** Ubicación de la sede. */
export const sedeInfo = {
  titulo: 'Escuela Politécnica Nacional',
  campus: 'Campus Politécnico José Rubén Orellana R.',
  direccion: 'Ladrón de Guevara E11-253, Quito 170525, Ecuador',
  lat: -0.21033,
  lng: -78.48899,
  /** Embed de Google Maps sin API key (no requiere clave ni facturación). */
  mapaEmbed:
    'https://www.google.com/maps?q=Escuela+Polit%C3%A9cnica+Nacional%2C+Ladr%C3%B3n+de+Guevara+E11-253%2C+Quito&hl=es&z=16&output=embed',
  /** Enlace para abrir indicaciones en la app de Google Maps. */
  mapaComoLlegar:
    'https://www.google.com/maps/dir/?api=1&destination=Escuela+Polit%C3%A9cnica+Nacional%2C+Quito',
} as const;

export const contacto = {
  correo: 'rama.ieee@epn.edu.ec',
  telefono: '+593 96 787 2169',
  telefonoHref: '+593967872169',
} as const;

export const redes = [
  { etiqueta: 'Instagram · @ieee_ecuador', url: 'https://instagram.com/ieee_ecuador' },
  { etiqueta: 'Instagram · @sb.ieee.epn', url: 'https://instagram.com/sb.ieee.epn' },
  { etiqueta: 'Instagram · @ieee_students_ec', url: 'https://instagram.com/ieee_students_ec' },
] as const;

export const enlacesIeee = [
  { etiqueta: 'IEEE.org', url: 'https://www.ieee.org' },
  { etiqueta: 'IEEE Student Branches', url: 'https://students.ieee.org' },
  { etiqueta: 'Hazte miembro IEEE', url: 'https://www.ieee.org/membership/join' },
] as const;

export type EnlaceUtil = { etiqueta: string; url: string; italica?: string };

export const barraUtil: readonly EnlaceUtil[] = [
  { etiqueta: 'IEEE.org', url: 'https://www.ieee.org' },
  { etiqueta: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org', italica: 'Xplore' },
  { etiqueta: 'IEEE SA', url: 'https://standards.ieee.org' },
  { etiqueta: 'IEEE Spectrum', url: 'https://spectrum.ieee.org' },
  { etiqueta: 'Más sitios', url: 'https://www.ieee.org/sitemap.html' },
];

export const navegacion = [
  { id: 'que-es', etiqueta: 'Qué es' },
  { id: 'programa', etiqueta: 'Programa' },
  { id: 'ponentes', etiqueta: 'Ponentes' },
  { id: 'sede', etiqueta: 'Sede' },
  { id: 'hospedaje', etiqueta: 'Hospedaje' },
  { id: 'auspiciantes', etiqueta: 'Auspiciantes' },
  { id: 'contacto', etiqueta: 'Contacto' },
] as const;

/** Identificadores válidos para anclas internas (lista blanca anti-inyección). */
export const anclasValidas: readonly string[] = [
  'inicio',
  'inscripcion',
  ...navegacion.map((n) => n.id),
];
