# Electroneumática Interactiva — Sitio Web

Sitio web moderno generado con **Astro 6 + Tailwind CSS v4**, optimizado para SEO, rendimiento (Lighthouse 100) y captación de leads vía WhatsApp.

---

## Stack

| Tecnología | Versión | Motivo |
|---|---|---|
| **Astro** | 6.x | SSG — cero JS por defecto, ideal para Netlify/Vercel/Cloudflare Pages |
| **Tailwind CSS** | 4.x | Styling con tokens via `@theme`, `@tailwindcss/vite` |
| **TypeScript** | strict | Tipado estricto en componentes Astro |
| **@astrojs/sitemap** | 3.x | Genera `sitemap-index.xml` automáticamente |

---

## Requisitos

- **Node.js >= 22.12** (usa `nvm use 24` si tienes nvm)
- **pnpm** (recomendado) — `npm i -g pnpm`

---

## Inicio rápido

```bash
# 1. Instalar dependencias
pnpm install

# 2. Servidor de desarrollo (http://localhost:4321)
pnpm dev

# 3. Build de producción
pnpm build

# 4. Preview del build local
pnpm preview
```

El build genera el sitio estático en `dist/`. Sube esa carpeta a cualquier hosting estático.

---

## Despliegue

### Netlify (recomendado — gratis)
1. Conecta el repositorio en [netlify.com](https://netlify.com)
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. El sitio queda publicado automáticamente en cada push a `main`

### Vercel
1. Importa el proyecto en [vercel.com](https://vercel.com)
2. Vercel detecta Astro automáticamente
3. Framework preset: **Astro**

### Cloudflare Pages
1. Conecta el repo en [pages.cloudflare.com](https://pages.cloudflare.com)
2. Build command: `pnpm build`
3. Build output directory: `dist`

### GitHub Pages
1. Agrega `base: '/nombre-repo'` en `astro.config.mjs` si no usas dominio custom
2. Deploy con `pnpm build` y sube `dist/` manualmente o via GitHub Actions

---

## Personalización obligatoria antes del lanzamiento

Busca el texto `TODO` en los archivos para encontrar todos los puntos de cambio:

```bash
grep -r "TODO" src/ public/
```

### 1. Número de WhatsApp
Todos los archivos usan `WA_NUMBER = '+526692629862'` como placeholder.
Reemplázalo con el número real (formato internacional sin `+` ni espacios):

| Archivo | Variable |
|---|---|
| `src/layouts/Layout.astro` | `WA_NUMBER` en el botón flotante |
| `src/components/Header.astro` | `WA_NUMBER` |
| `src/components/Hero.astro` | `WA_NUMBER` |
| `src/components/Servicios.astro` | `WA_NUMBER` |
| `src/components/Diferenciadores.astro` | URL directa en el CTA band |
| `src/components/Contacto.astro` | `WA_NUMBER` |
| `src/components/Footer.astro` | `WA_NUMBER` |

### 2. Dominio de producción
En `astro.config.mjs` cambia:
```js
const SITE_URL = 'https://TU-DOMINIO-REAL.com';
```
Y en `public/robots.txt` actualiza la línea de Sitemap.

En `src/layouts/Layout.astro`:
```js
const SITE_URL = 'https://TU-DOMINIO-REAL.com';
```

### 3. Datos de negocio
Los datos reales ya están cargados (dirección, teléfonos, correos) — verifica que estén vigentes en `src/components/Contacto.astro` y `src/layouts/Layout.astro`.

### 4. Testimonios
Los testimonios en `src/components/Testimonios.astro` son representativos. Reemplázalos con citas reales de clientes.

### 5. Imagen OG
Coloca una imagen `public/og-image.jpg` de 1200×630 px para compartir en redes sociales. Si no existe, los links compartidos mostrarán una imagen en blanco.

### 6. Formulario de contacto
El formulario en `src/components/Contacto.astro` actualmente simula el envío (sin backend real). Para activarlo elige una de estas opciones:

**Netlify Forms** (más simple — gratis):
Agrega `netlify` al `<form>`:
```html
<form id="contact-form" netlify name="contacto" ...>
  <input type="hidden" name="form-name" value="contacto" />
  ...
</form>
```
Y en el script, reemplaza el `setTimeout` por un `fetch('/','...')` con los datos del formulario.

**Formspree** (funciona en cualquier hosting):
```js
const res = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(data)),
});
```

---

## Estructura del proyecto

```
electroneumaticainteractiva/
├── public/
│   ├── favicon.svg          # Ícono de rayo — reemplaza si tienes marca propia
│   ├── favicon.ico
│   ├── robots.txt
│   └── og-image.jpg         # TODO: crear esta imagen
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navbar sticky con mobile drawer
│   │   ├── Hero.astro       # Hero con imagen, stats y CTA WhatsApp
│   │   ├── Servicios.astro  # Grid de 6 servicios con cards
│   │   ├── Beneficios.astro # 6 beneficios + imagen lateral
│   │   ├── Diferenciadores.astro  # 3 diferenciadores alternados + CTA band
│   │   ├── Testimonios.astro      # 6 testimonios en grid
│   │   ├── Contacto.astro   # Info + formulario + mapa
│   │   └── Footer.astro     # Footer completo
│   ├── layouts/
│   │   └── Layout.astro     # HTML base, meta tags, JSON-LD, fuentes, botón flotante WA
│   ├── pages/
│   │   └── index.astro      # Página principal (compone todos los componentes)
│   └── styles/
│       └── global.css       # Tailwind v4 + design tokens + base styles
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## SEO incluido

- Meta tags: title, description, canonical, robots
- Open Graph + Twitter Cards
- hreflang `es` + `x-default`
- JSON-LD `LocalBusiness` con catálogo de servicios completo
- `sitemap-index.xml` generado automáticamente por `@astrojs/sitemap`
- `robots.txt`
- `lang="es"` en `<html>`
- Heading hierarchy correcta (un `<h1>` por página)
- Imágenes con `alt`, `width`, `height`, `loading="lazy"` / `fetchpriority="high"` para LCP

---

## Accesibilidad

- Skip-to-content link (`Saltar al contenido principal`)
- `aria-label` en todos los elementos interactivos
- `role="list"` explícito en listas de tarjetas
- Colores con contraste WCAG AA
- Focus styles visibles en todos los elementos interactivos
- `aria-live="polite"` en mensajes de error del formulario
- Animaciones desactivadas con `prefers-reduced-motion`
- Estructura semántica: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<dl>`
