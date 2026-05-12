# Iris · Brand Book + Assets aplicables

> Paraguas whitelabel de telemedicina · v1.0 · May 2026
> Casa canónica del branding Iris. Edita aquí; no dupliques.

## Estructura

```
Iris/
├── Brand-Book-Iris.html          Documento maestro (abrir en navegador)
├── README.md                     Este archivo
├── tokens/                       Design tokens (CSS + JSON)
├── logo/                         Isotipo, wordmark, lockup, tenants
├── favicon/                      SVG + PNG fallbacks + snippet HTML
├── motion/                       6 animaciones canónicas (CSS + demo)
├── icons/                        24 iconos: sprite, individuales, TSX
└── voice/                        Voz, manifiesto, taglines, Aria
```

## Empezar rápido

### 1 · Tokens CSS (paleta, tipografía, radios, sombras)

```html
<link rel="stylesheet" href="/iris-tokens.css">
```

```css
.btn-primary { background: var(--iris-500); color: #fff; }
.card        { border-radius: var(--r-md); box-shadow: var(--sh-1); }
```

Si usás Tailwind, el `iris-tokens.json` es importable directo a `tailwind.config.js`
como `theme.extend.colors`.

### 2 · Logo

Tres archivos cubren todo:

| Cuándo | Archivo |
|---|---|
| Sobre fondo claro (default producto, brand book) | `logo/iris-isotype.svg` |
| Sobre fondo oscuro (hero, login derecha, manifiesto) | `logo/iris-isotype-dark.svg` |
| Una sola tinta (footers, sellos, mono-print) | `logo/iris-isotype-mono.svg` — usa `currentColor` |

**Clear space mínimo:** ancho del centro × 2 a cada lado. **Tamaño mínimo:** 16px isotype solo, 80px lockup.

Para tenants, usar `logo/tenants/iris-tenant-<slug>.svg` o cambiar dinámicamente con CSS:

```css
:root[data-tenant="cerkana"] { --iris-tenant-color: #0D9B8A; }
```

### 3 · Favicon

Copiá los 4 archivos de `favicon/` a tu `public/` (o equivalente) y pegá en `<head>`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<meta name="theme-color" content="#5847E0">
```

(El snippet completo, con variantes whitelabel, está en `favicon/favicon-snippet.html`.)

### 4 · Iconos (3 modos de uso)

**a) SVG individual** — drop-in simple:

```html
<img src="/icons/latido.svg" alt="" width="24" height="24">
```

**b) Sprite SVG** — un solo request HTTP, recomendado para apps grandes:

```html
<svg width="24" height="24"><use href="/sprite.svg#icon-latido"/></svg>
```

**c) Componente React** — para Next.js / Vite / CRA:

```tsx
import { IrisIcon } from "@/components/IrisIcon";
<IrisIcon name="latido" size={24} className="text-iris-600" />
```

(Copiar `icons/IrisIcon.tsx` + `icons/sprite.svg` al `public/`.)

**Regla del uno:** cada icono lleva *un* elemento firma — el dot indigo o el cuarto de
círculo — nunca los dos. Ver `icons/icon-manifest.json` para qué firma usa cada uno.

### 5 · Motion

Importá el CSS y aplicá la clase al `<svg>` del isotipo:

```html
<link rel="stylesheet" href="/iris-motion.css">

<svg class="iris-motion-draw" viewBox="0 0 220 220">
  <path class="iris-petal iris-p1" .../>
  <path class="iris-petal iris-p2" .../>
  <path class="iris-petal iris-p3" .../>
  <path class="iris-petal iris-p4" .../>
  <circle class="iris-center" .../>
</svg>
```

| Clase | Uso |
|---|---|
| `.iris-motion-draw` | Splash · intro · página de carga inicial |
| `.iris-motion-breath` | Idle · header del dashboard · status page |
| `.iris-motion-rotate` | Loading largo · sync · export |
| `.iris-motion-whitelabel` | Hero del sitio · deck · demo |
| `.iris-motion-signal` | "Aria está pensando" · procesamiento de IA |
| `.iris-motion-orbit` | Narrativo · keynote · video de marca |

Respeta `prefers-reduced-motion: reduce` automáticamente.

### 6 · Voz · Taglines · Aria

Markdown completo en [`voice/iris-voice-guidelines.md`](voice/iris-voice-guidelines.md).
Resumen accionable:

- **Tagline principal:** "La infraestructura del cuidado a distancia."
- **Voz:** directa · infraestructural · humana · bilingüe (ES default).
- **Aria** (asistente IA por defecto): atenta · sabe callarse · recuerda.
  Renombre por tenant: Cerkana → Lía, San Rafael → Sara, Dentaid → Dani.

## Whitelabel · cómo respira con cada tenant

El pétalo superior derecho + el centro del isotipo son el "slot del tenant".

```html
<html data-tenant="cerkana">
```

```css
/* iris-tokens.css ya hace esto: */
:root[data-tenant="cerkana"]   { --iris-tenant-color: #0D9B8A; }
:root[data-tenant="sanrafael"] { --iris-tenant-color: #1E40AF; }
:root[data-tenant="dentaid"]   { --iris-tenant-color: #B8860B; }
```

```css
/* En tu CSS de logo: */
.iris-logo .petal-tenant,
.iris-logo .center        { stroke: var(--iris-tenant-color); fill: var(--iris-tenant-color); }
```

El resto del isotipo queda en `#0B0D12` (ink). El favicon también cambia con
`<meta name="theme-color">`.

## Fuentes

Cargadas desde Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,500;1,6..72,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Si necesitás self-host (compliance · performance), descargá los WOFF2 desde
[google-webfonts-helper](https://gwfh.mranftl.com/fonts) y serví desde `/fonts/`.
Las familias completas son: **Inter** (400/500/600/700), **Newsreader** (italic 500),
**JetBrains Mono** (400/500).

## Referencias originales

Este sistema consolida 5 archivos de exploración previa (en `~/Downloads/`,
ya importados al brand book):

- `Brand Book Iris.html` (v0.1) · arquitectura paraguas + naming exploration
- `Iris Iteraciones v2.html` · variantes del wordmark
- `Iris Logo v4 Profundizacion.html` · isotipo final (flor de arcos)
- `Iris Motion + Iconos.html` · 6 motion states + 24 iconos
- `Iris Sistema Completo.html` · voz · Aria · taglines · mockups
- `Site iris.health · 3 direcciones.html` · 3 direcciones de landing (Atlas / Editorial / Producto)

Los assets aquí son los **definitivos**. Los originales quedan como histórico de proceso.

## Próximos pasos sugeridos

1. **Drop-in en Cercana / Iris repo:** copiar `tokens/`, `logo/`, `favicon/`, `icons/`, `motion/` al `public/` del proyecto.
2. **Site iris.health:** elegir una de las 3 direcciones del archivo de site exploration.
3. **Onboarding nuevo tenant:** crear `logo/tenants/iris-tenant-<slug>.svg` + entry en `iris-tokens.css`.

---

*Cualquier cambio durable acá → reflejarlo en wiki Prometheus como [[Iris]]
o ADR si afecta arquitectura de marca.*
