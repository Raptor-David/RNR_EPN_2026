export type Ponente = {
  nombre: string;
  cargo: string;
  charla: string;
  foto: string;
  /** Encuadre vertical de la foto (object-position). */
  encuadre?: string;
  alt: string;
};

export const ponentes: Ponente[] = [
  {
    nombre: 'Dra. Valentina Ramos Ramos',
    cargo: 'Vicerrectora de Docencia · Escuela Politécnica Nacional',
    charla: 'Palabras de bienvenida — Inauguración de la Reunión Nacional de Ramas',
    foto: '/img/ponentes/valentina-ramos.jpg',
    encuadre: 'center 22%',
    alt: 'Dra. Valentina Ramos Ramos, Vicerrectora de Docencia de la Escuela Politécnica Nacional',
  },
  {
    nombre: 'Dr. Julio Barzola-Monteses',
    cargo: 'Presidente · IEEE Ecuador Section',
    charla: 'Palabras de bienvenida — IEEE Ecuador Section',
    foto: '/img/ponentes/julio-barzola.jpg',
    encuadre: 'center 30%',
    alt: 'Dr. Julio Barzola-Monteses, Presidente de IEEE Ecuador Section',
  },
  {
    nombre: 'Dr. Fabián Pérez',
    cargo: 'Consejero · Rama Estudiantil EPN',
    charla: 'Palabras de bienvenida — Rama Estudiantil EPN',
    foto: '/img/ponentes/fabian-perez.jpg',
    encuadre: 'center 28%',
    alt: 'Dr. Fabián Pérez, Consejero de la Rama Estudiantil IEEE EPN',
  },
  {
    nombre: 'MSc. Alcibar Yánez',
    cargo: 'Tesorero · IEEE Ecuador Section',
    charla: 'Charla de tesorería',
    foto: '/img/ponentes/alcibar-yanez.jpg',
    encuadre: 'center 25%',
    alt: 'MSc. Alcibar Yánez, Tesorero de IEEE Ecuador Section',
  },
];
