# RNR Quito 2026 — sitio oficial

Landing page de la **XXII Reunión Nacional de Ramas Estudiantiles IEEE**
(25–27 de septiembre de 2026 · Escuela Politécnica Nacional, Quito).

Construida con [Astro](https://astro.build) como sitio **100 % estático**: no hay
servidor, ni base de datos, ni API. El build produce HTML, CSS e imágenes.

---

## Arrancar en local

```bash
npm install      # una sola vez
npm run dev      # http://localhost:4321
```

Otros comandos:

| Comando            | Qué hace                                         |
| ------------------ | ------------------------------------------------ |
| `npm run build`    | Revisa tipos y genera `dist/`                    |
| `npm run build:fast` | Genera `dist/` sin revisar tipos               |
| `npm run preview`  | Sirve `dist/` como lo haría producción           |

Requiere Node 18.20.8 o superior (recomendado Node 20+).

---

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (o GitLab / Bitbucket).
2. En Vercel: **Add New… → Project → Import** ese repositorio.
3. Vercel detecta Astro solo. No hace falta tocar nada: `vercel.json` ya fija
   `buildCommand`, `outputDirectory` y las cabeceras de seguridad.
4. **Deploy.** Cada push a la rama principal vuelve a desplegar.

Alternativa por línea de comandos:

```bash
npm i -g vercel
vercel          # vista previa
vercel --prod   # producción
```

### Después de conectar un dominio propio

Cambia `site` en `astro.config.mjs` y la URL de `public/sitemap.xml` y
`public/robots.txt`. Eso corrige el canonical y las tarjetas de redes sociales.

---

## Dónde se edita cada cosa

Casi todo el contenido está separado del diseño:

| Archivo                     | Contiene                                                     |
| --------------------------- | ------------------------------------------------------------ |
| `src/data/sitio.ts`         | Fechas, sede, contacto, redes, enlace del formulario, **fecha de revelación del programa** |
| `src/data/programa.ts`      | Programa de los tres días (horas, títulos, ponentes, pausas)  |
| `src/data/ponentes.ts`      | Tarjetas de charlas y ponentes                                |
| `src/components/*.astro`    | Cada sección de la página                                     |
| `src/styles/global.css`     | Paleta, tipografía y utilidades comunes                       |
| `public/img/`               | Logos, fotos de ponentes, mapa del campus, afiches            |

### Cambiar el enlace del formulario

Una sola línea, en `src/data/sitio.ts`:

```ts
export const inscripcion = {
  url: 'https://docs.google.com/forms/...',
  cupos: '150 asistentes',
};
```

### Agregar una charla al programa

En `src/data/programa.ts`, dentro del día correspondiente:

```ts
{
  tipo: 'sesion',
  hora: '10H00 – 11H00',
  titulo: 'Nombre de la charla',
  detalle: 'Ponente · Institución',
  acento: 'ambar', // opcional: resalta la fila
}
```

También existen `{ tipo: 'pausa', texto: '…' }` para almuerzos y coffee breaks, y
`{ tipo: 'titulo', texto: '…' }` para separar bloques del día.

---

## El programa difuminado y su cuenta regresiva

El programa se muestra borroso con un contador hasta el
**23 de septiembre de 2026 a las 12h00 (hora de Ecuador, UTC-5)**.

La fecha está en `src/data/sitio.ts`:

```ts
export const revelacionPrograma = '2026-09-23T12:00:00-05:00';
```

Funciona en dos capas:

1. **En el build.** Si el sitio se despliega después de esa hora, el desenfoque
   ni siquiera se imprime en el HTML.
2. **En el navegador.** Si alguien tiene la página abierta cuando llega la hora,
   el velo se retira solo, sin recargar.

> **Importante y honesto:** es una cortina *visual*, no un control de acceso.
> El contenido del programa viaja dentro del HTML y alguien con conocimientos
> puede leerlo antes de tiempo. Si algún dato no debe verse hasta el día 23,
> no lo pongas en `programa.ts` todavía: agrégalo después.

Mientras está bloqueado, las tarjetas no reciben clics ni foco de teclado, así
que nadie llega a ellas tabulando.

---

## Medidas de seguridad incluidas

Al ser un sitio estático sin backend, la superficie de ataque es pequeña. Aun
así está endurecido:

- **Content-Security-Policy estricta** (`vercel.json`): `script-src 'self'`, sin
  `unsafe-inline` ni `unsafe-eval`. Ningún script en línea; Vite emite todo el JS
  como archivos propios con hash (`assetsInlineLimit: 0` en `astro.config.mjs`).
- **`frame-ancestors 'none'` + `X-Frame-Options: DENY`** — el sitio no se puede
  incrustar en otra página (anti *clickjacking*).
- **`X-Content-Type-Options: nosniff`**, **`Referrer-Policy`**, **HSTS**,
  **`Permissions-Policy`** (cámara, micrófono, geolocalización y demás, apagados).
- **`object-src 'none'`** y **`base-uri 'self'`** — no se puede inyectar un
  `<base>` que redirija los enlaces relativos.
- Todos los enlaces externos llevan `rel="noopener noreferrer"` y el iframe del
  mapa va con `sandbox` y `referrerpolicy`.
- **Nada de `innerHTML`.** El contador escribe con `textContent`.
  `src/lib/seguridad.ts` reúne los ayudantes: `escaparHtml()`, `limpiarEntrada()`
  (recorta, normaliza y descarta caracteres de control y de etiqueta) y
  `esUrlSegura()` (solo `http`/`https`).
- **Anclas validadas.** `asegurarAnclaSegura()` compara el `#fragmento` de la URL
  contra una lista blanca y lo limpia si no corresponde a una sección real.
- Sin *sourcemaps* en producción y sin cookies, analíticas ni almacenamiento
  local: no hay datos personales que filtrar.

### Si más adelante agregas un formulario propio

Este sitio no tiene campos de entrada: la inscripción vive en Google Forms. El
día que agregues uno, la base ya está lista:

1. Pasa cada valor por `limpiarEntrada()` antes de usarlo.
2. Valida en el servidor también — la validación del navegador es comodidad, no
   seguridad.
3. Añade el destino del envío a `form-action` en la CSP de `vercel.json`.
4. Usa `type`, `maxlength`, `pattern` y `autocomplete` en cada `<input>`.

---

## Accesibilidad y rendimiento

- Diseño **mobile first**: el CSS base es el de teléfono y crece con
  `@media (min-width: …)` a 420, 560, 620, 760, 900 y 1100 px.
- Sin desplazamiento horizontal en ningún ancho (verificado a 390, 768 y 1440 px).
- Áreas táctiles de 44 px mínimo en pantallas táctiles.
- Enlace «saltar al contenido», `:focus-visible` visible y textos alternativos
  en todas las imágenes.
- La barra de scroll está oculta y en su lugar hay una línea de progreso; el
  desplazamiento sigue funcionando con rueda, dedo y teclado.
- Las animaciones respetan `prefers-reduced-motion` y, sin JavaScript, todo el
  contenido se ve igual.
- Imágenes optimizadas y con `loading="lazy"` salvo el logo de la cabecera.

---

## Estructura

```
.
├── astro.config.mjs      # configuración de Astro y Vite
├── vercel.json           # build y cabeceras de seguridad
├── public/
│   ├── img/              # logos, ponentes, mapa, afiches
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # una sección por archivo
│   ├── data/             # contenido editable
│   ├── layouts/Base.astro
│   ├── lib/              # scripts del cliente
│   ├── pages/            # index.astro y 404.astro
│   └── styles/global.css
└── referencia/           # material original (landing .dc.html e imágenes sin optimizar)
```

---

Rama Estudiantil IEEE EPN · IEEE Ecuador Section
