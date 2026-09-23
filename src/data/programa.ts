/**
 * Programa preliminar de la RNR 2026.
 * Editar solo este archivo para cambiar horarios: la vista se regenera sola.
 */

export type Subitem = {
  hora: string;
  titulo: string;
  detalle?: string;
  /** Resalta el subitem (p. ej. bienvenidas oficiales, intervenciones de auspiciantes). */
  acento?: 'ambar' | 'cyan' | 'morado';
};

export type Item =
  | {
      tipo: 'sesion';
      hora: string;
      titulo: string;
      detalle?: string;
      nota?: string;
      /** Resalta la fila (inauguración, foto oficial, cena de gala, intervenciones de auspiciantes). */
      acento?: 'ambar' | 'cyan' | 'morado';
      subitems?: Subitem[];
    }
  | {
      tipo: 'pausa';
      texto: string;
    }
  | {
      tipo: 'titulo';
      texto: string;
    };

export type Dia = {
  numero: string;
  fecha: string;
  items: Item[];
};

export const programa: Dia[] = [
  {
    numero: 'Día 1',
    fecha: 'Viernes 25 de septiembre',
    items: [
      { tipo: 'titulo', texto: 'Llegada y apertura' },
      {
        tipo: 'sesion',
        hora: '7H30 – 8H00',
        titulo: 'Traslado al Campus Politécnico José Rubén Orellana R.',
      },
      { tipo: 'sesion', hora: '8H00 – 9H00', titulo: 'Registro y entrega de kits' },
      { tipo: 'titulo', texto: 'Reunión Nacional de Ramas' },
      {
        tipo: 'sesion',
        hora: '9H00 – 11H00',
        titulo: 'Inauguración de la Reunión Nacional de Ramas',
        detalle: 'Conduce: Voluntario 1',
        subitems: [
          {
            hora: '9H00 – 9H10',
            titulo: 'Palabras de bienvenida — Rama Estudiantil EPN',
            detalle: 'Elias Viteri · Presidente de la Rama Estudiantil EPN',
            acento: 'ambar',
          },
          {
            hora: '9H10 – 9H20',
            titulo: 'Palabras de bienvenida — Escuela Politécnica Nacional',
            detalle: 'Dra. Valentina Ramos Ramos · Vicerrectora de Docencia',
            acento: 'ambar',
          },
          {
            hora: '9H20 – 9H30',
            titulo: 'Palabras de bienvenida — IEEE Ecuador Section',
            detalle: 'Dr. Julio Barzola-Monteses · Presidente Sección Ecuador',
            acento: 'ambar',
          },
          {
            hora: '9H45 – 10H00',
            titulo: 'PMI — Convenio',
            detalle: 'Greysi Fairuths Ramírez · PMO & Delivery Manager, IEEE Section Ecuador',
            acento: 'ambar',
          },
          {
            hora: '10H00 – 10H05',
            titulo: 'Intervención musical',
            detalle: 'Coro Politécnico',
            acento: 'ambar',
          },
          {
            hora: '10H05 – 10H20',
            titulo: 'Intervención de PES Ecuador',
            detalle: 'Conduce: IEEE PES Ecuador Chapter',
            acento: 'morado',
          },
          {
            hora: '10H30 – 11H00',
            titulo: 'Charla de premios',
            detalle: 'Ing. Marco Vinueza · SAC R9 Awards Coordinator',
          },
        ],
      },
      {
        tipo: 'sesion',
        hora: '11H00 – 12H00',
        titulo: 'Cómo hacer tu CV',
        detalle: 'Conduce: SGF GLOBAL',
      },
      {
        tipo: 'sesion',
        hora: '12H00 – 12H30',
        titulo: 'SIGHT CHALLENGE 2026',
        detalle: 'Ing. Santiago Huera',
      },
      {
        tipo: 'sesion',
        hora: '12H30 – 12H45',
        titulo: 'Traslado al almuerzo',
        nota: 'El protocolo de flujo y conteo consiste en que los voluntarios se organicen formando pasillos humanos para guiar de manera ordenada a los asistentes desde las salidas del teatro hasta el Policomedor, aplicando un sistema de desalojo escalonado por secciones para evitar aglomeraciones, mientras que el personal designado se encarga de registrar de forma precisa el número total de personas que transcurren durante el traslado.',
      },
      { tipo: 'pausa', texto: '12H45 – 14H00 · Almuerzo' },
      { tipo: 'pausa', texto: '14H00 – 14H15 · Traslado - CEC' },
      {
        tipo: 'sesion',
        hora: '14H15 – 14H45',
        titulo: 'Charla técnica',
        detalle: 'Andrea Jurado Narváez · Founder at InitGrammers',
      },
      {
        tipo: 'sesion',
        hora: '14H45 – 14H50',
        titulo: 'Intervención de RAS Ecuador',
        detalle: 'Conduce: RAS Ecuador',
        acento: 'morado',
      },
      {
        tipo: 'sesion',
        hora: '15H00 – 16H00',
        titulo: 'Recorrido técnico',
        acento: 'cyan',
        subitems: [
          {
            hora: 'Opción 1',
            titulo: 'Laboratorio de Ópticas — Facultad de Ingeniería Eléctrica y Electrónica',
            detalle: 'Dr. Christian Tipantuña',
            acento: 'cyan',
          },
          {
            hora: 'Opción 2',
            titulo: 'Laboratorio de ATA — Facultad de Ingeniería Mecánica',
            detalle: 'Dr. Esteban Valencia · Dr. Víctor Hugo Hidalgo',
            acento: 'cyan',
          },
          {
            hora: 'Opción 3',
            titulo: 'Laboratorio de Biomedicina',
            detalle: 'Dr. William Venegas',
            acento: 'cyan',
          },
        ],
      },
      { tipo: 'pausa', texto: '16H00 – 16H30 · Coffee break — preparación para la feria de ramas' },
      {
        tipo: 'sesion',
        hora: '16H30 – 17H00',
        titulo: 'Feria de Ramas',
        detalle: 'IEEE Student Ecuador Section',
      },
      {
        tipo: 'sesion',
        hora: '17H00 – 17H25',
        titulo: 'Rifa de apoyo IEEE',
        detalle: 'Universidad Técnica del Norte',
        acento: 'ambar',
      },
      {
        tipo: 'sesion',
        hora: '17H25 – 17H45',
        titulo: 'Sesión de foto oficial',
        detalle: 'CEC — Centro de Educación Continua',
        acento: 'ambar',
        subitems: [
          {
            hora: 'Foto 1',
            titulo: 'Sin banderas estudiantiles',
            detalle: 'Fotografía general de todas las delegaciones',
          },
          {
            hora: 'Foto 2',
            titulo: 'Con banderas estudiantiles',
            detalle: 'Cada rama con la bandera de su respectiva rama',
          },
        ],
      },
      { tipo: 'titulo', texto: 'Noche · City tour' },
      {
        tipo: 'sesion',
        hora: '18H00 – 21H00',
        titulo: 'Con destino al Centro Histórico',
        detalle: 'Incluye refrigerio',
      },
      { tipo: 'sesion', hora: '21H00 – 22H00', titulo: 'Retorno al hotel' },
    ],
  },
  {
    numero: 'Día 2',
    fecha: 'Sábado 26 de septiembre',
    items: [
      { tipo: 'titulo', texto: 'Mañana' },
      { tipo: 'sesion', hora: '7H00 – 8H30', titulo: 'Desayuno' },
      {
        tipo: 'sesion',
        hora: '8H30 – 9H00',
        titulo: 'Traslado al Campus Politécnico José Rubén Orellana R.',
      },
      {
        tipo: 'sesion',
        hora: '9H00 – 9H10',
        titulo: 'Intervención de CAS & EDS Ecuador',
        detalle: 'Conduce: IEEE CAS & EDS Ecuador Joint Chapter',
        acento: 'morado',
      },
      {
        tipo: 'sesion',
        hora: '9H10 – 10H00',
        titulo: 'Conversatorio — YP',
        detalle: 'Steven Molina',
      },
      { tipo: 'pausa', texto: '10H00 – 10H30 · Coffee break' },
      {
        tipo: 'sesion',
        hora: '10H30 – 11H15',
        titulo: 'Taller — WIE',
        detalle: 'Marcela Gallegos Altamirano',
      },
      {
        tipo: 'sesion',
        hora: '11H15 – 11H35',
        titulo: 'Charla',
        detalle: 'MSc. Alcibar Yánez · Tesorero IEEE Ecuador Section',
      },
      {
        tipo: 'sesion',
        hora: '11H35 – 12H00',
        titulo: 'Charla',
        detalle: 'Dr. Julio Barzola-Monteses · Presidente Sección Ecuador',
      },
      {
        tipo: 'sesion',
        hora: '12H00 – 13H00',
        titulo: 'SIGHT CHALLENGE 2026',
        detalle: 'Continuación · Ing. Santiago Huera',
      },
      {
        tipo: 'sesion',
        hora: '13H00 – 13H15',
        titulo: 'Traslado al almuerzo',
        nota: 'El protocolo de flujo y conteo consiste en que los voluntarios se organicen formando pasillos humanos para guiar de manera ordenada a los asistentes desde las salidas del teatro hasta el Policomedor, aplicando un sistema de desalojo escalonado por secciones para evitar aglomeraciones, mientras que el personal designado se encarga de registrar de forma precisa el número total de personas que transcurren durante el traslado.',
      },
      { tipo: 'pausa', texto: '13H15 – 14H45 · Almuerzo' },
      { tipo: 'pausa', texto: '14H45 – 15H00 · Traslado - CEC' },
      { tipo: 'titulo', texto: 'Tarde' },
      {
        tipo: 'sesion',
        hora: '15H00 – 16H00',
        titulo: 'Los líderes que transforman organizaciones',
        detalle: 'Ing. Edgar Pineda · CEC',
      },
      {
        tipo: 'sesion',
        hora: '16H00 – 16H10',
        titulo: 'Intervención de CSS & IES Ecuador',
        detalle: 'Conduce: IEEE CSS & IES Ecuador Joint Chapter',
        acento: 'morado',
      },
      {
        tipo: 'sesion',
        hora: '16H10 – 18H10',
        titulo: 'Feria de ciudades',
        detalle: 'IEEE Student Ecuador Section',
      },
      { tipo: 'pausa', texto: '17H10 – 17H40 · Traslado Hotel 6 de Diciembre' },
      {
        tipo: 'sesion',
        hora: '19H00 – 23H00',
        titulo: 'Cena de gala',
        acento: 'cyan',
      },
    ],
  },
  {
    numero: 'Día 3',
    fecha: 'Domingo 27 de septiembre',
    items: [
      { tipo: 'titulo', texto: 'Cierre y ciudad · modera [Nombre]' },
      {
        tipo: 'sesion',
        hora: '7H00 – 8H30',
        titulo: 'Desayuno',
        detalle: 'Hotel 6 de Diciembre',
      },
      {
        tipo: 'sesion',
        hora: '12H30',
        titulo: 'Check out',
        detalle: 'Hotel 6 de Diciembre',
      },
      { tipo: 'pausa', texto: '12H30 · Cierre final' },
    ],
  },
];
