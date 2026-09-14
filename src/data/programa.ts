/**
 * Programa preliminar de la RNR 2026.
 * Editar solo este archivo para cambiar horarios: la vista se regenera sola.
 */

export type Subitem = {
  hora: string;
  titulo: string;
  detalle?: string;
};

export type Item =
  | {
      tipo: 'sesion';
      hora: string;
      titulo: string;
      detalle?: string;
      nota?: string;
      /** Resalta la fila (inauguración, foto oficial, cena de gala). */
      acento?: 'ambar' | 'cyan';
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
        hora: '9H00 – 10H00',
        titulo: 'Inauguración de la Reunión Nacional de Ramas',
        detalle: 'Conduce: Andrey Carrillo',
        acento: 'ambar',
        subitems: [
          {
            hora: '9H00 – 9H10',
            titulo: 'Palabras de bienvenida — Escuela Politécnica Nacional',
            detalle: 'Dra. Valentina Ramos Ramos · Vicerrectora de Docencia',
          },
          {
            hora: '9H10 – 9H20',
            titulo: 'Palabras de bienvenida — IEEE Ecuador Section',
            detalle: 'Dr. Julio Barzola-Monteses · Presidente Sección Ecuador',
          },
          {
            hora: '9H20 – 9H30',
            titulo: 'Mensaje inaugural — Rama Estudiantil EPN',
            detalle: 'Elias Viteri · Presidente de la Rama Estudiantil EPN',
          },
          {
            hora: '9H30 – 9H40',
            titulo: 'PMI — Firma',
            detalle: 'PMI - IEEE · Firma. IEEE Section Ecuador',
          },
          {
            hora: '9H40 – 10H00',
            titulo: 'Intervención musical',
            detalle: 'Coro Politécnico',
          },
        ],
      },
      {
        tipo: 'sesion',
        hora: '11H00 – 12H00',
        titulo: 'Cómo hacer tu CV',
        detalle: 'Conduce: Fortinet',
      },
      {
        tipo: 'sesion',
        hora: '12H30 – 12H45',
        titulo: 'Traslado al almuerzo',
        nota: 'El protocolo de flujo y conteo consiste en que los voluntarios se organicen formando pasillos humanos para guiar de manera ordenada a los asistentes desde las salidas del teatro hasta el Policomedor, aplicando un sistema de desalojo escalonado por secciones para evitar aglomeraciones, mientras que el personal designado registra de forma precisa el número total de personas que transcurren durante el traslado.',
      },
      { tipo: 'pausa', texto: '12H45 – 14H15 · Almuerzo' },
      { tipo: 'pausa', texto: '14H15 – 14H30 · Traslado - CEC' },
      {
        tipo: 'sesion',
        hora: '15H00 – 16H00',
        titulo: 'Charla técnica',
        detalle: 'Andrea Jurado Narváez · Co-Founder at InitGrammers',
      },
      { tipo: 'pausa', texto: '16H00 – 16H30 · Coffee break' },
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
        hora: '9H00 – 9H30',
        titulo: 'Los líderes que transforman organizaciones',
        detalle: 'Edgar Alvarez · Project Manager',
      },
      {
        tipo: 'sesion',
        hora: '9H30 – 11H00',
        titulo: 'Opción 1: Recorrido técnico — provisional',
        detalle: 'EPN',
        nota: 'En esta actividad, los estudiantes podrán elegir entre dos opciones de participación: visitar las instalaciones de Fortinet, con cupos limitados, o realizar un recorrido técnico dentro de la universidad. El cronograma establecido puede estar sujeto a cambios en función del número de asistentes y de las opciones seleccionadas por los participantes. Asimismo, los horarios asignados podrán variar de acuerdo con la alternativa elegida. Por ello, se solicita a los estudiantes organizar y gestionar responsablemente sus tiempos, considerando los horarios que sean asignados para cada actividad.',
        acento: 'ambar',
      },
      {
        tipo: 'sesion',
        hora: '9H30 – 11H00',
        titulo: 'Opción 2: Bootcamp — provisional',
        detalle: 'Fortinet',
        acento: 'ambar',
      },
      { tipo: 'pausa', texto: '11H15 – 11H30 · Break' },
      {
        tipo: 'sesion',
        hora: '11H30 – 11H45',
        titulo: 'Charla',
        detalle: 'MSc. Alcibar Yánez · Tesorería IEEE Ecuador Section',
      },
      {
        tipo: 'sesion',
        hora: '11H45 – 12H00',
        titulo: 'Charla',
        detalle: 'Dr. Julio Barzola · Presidente Sección Ecuador',
      },
      {
        tipo: 'sesion',
        hora: '12H00 – 12H30',
        titulo: 'Charla de premios',
        detalle: 'Ing. Marco Vinueza · Pasado Vicepresidente Rama Estudiantil EPN',
      },
      { tipo: 'sesion', hora: 'Reservado', titulo: 'Reservado', detalle: 'Reservado' },
      { tipo: 'sesion', hora: 'Reservado', titulo: 'Reservado', detalle: 'Reservado' },
      { tipo: 'pausa', texto: '13H00 – 14H15 · Almuerzo' },
      { tipo: 'pausa', texto: '14H15 – 14H30 · Traslado - CEC' },
      { tipo: 'titulo', texto: 'Tarde' },
      { tipo: 'sesion', hora: 'Reservado', titulo: 'Reservado', detalle: 'Reservado' },
      { tipo: 'sesion', hora: 'Reservado', titulo: 'Reservado', detalle: 'Reservado' },
      {
        tipo: 'sesion',
        hora: '15H00 – 16H30',
        titulo: 'Feria de ciudades',
        detalle: 'IEEE Student Ecuador Section',
      },
      { tipo: 'pausa', texto: '17H00 – 17H30 · Traslado Hotel 6 de Diciembre' },
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
      { tipo: 'titulo', texto: 'Cierre' },
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
