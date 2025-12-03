# Resumen global de variables y clases (SCSS / CSS)

Este documento resume las variables SASS y las clases/utilidades globales que aparecen en tu proyecto (archivos de `src/app/scss/...`), junto con ejemplos de uso.

**Archivos de referencia**

- `src/app/scss/01_utilities/_variables.scss` — variables SASS globales.
- `src/app/scss/03_global/_index.scss` y sus ficheros parciales (`_colors.scss`, `_font-size.scss`, `_margin.scss`, `_padding.scss`, `_box-shadow.scss`, `_height.scss`, `_gap.scss`, `_border-radius.scss`, `_font-family.scss`, `_font-weight.scss`, ...)

**1) Variables SASS globales (definidas en `_variables.scss`)**

- `$paddings` — lista de valores de padding.
- `$margins` — lista de valores de margin.
- `$font-size-lista` — lista de tamaños de fuente.
- `$font-families` — mapa con familias tipográficas (ej. `"default"`).
- `$font-weight` — lista con pesos de fuente.
- `$gap` — lista con tamaños de gap.
- `$border-radius` — lista con valores (como `50`).
- `$box-shadow` — lista con valores de sombra.
- `$widths` — lista con anchos.
- `$heights` — lista con alturas.
- `$colores` — mapa con paletas por nombre (ej. `"azul"`, `"gris"`, `"rojo"`, ...)

Ejemplo SCSS (leer variables desde el módulo de utilidades):

```scss
@use '../01_utilities/_index.scss' as utilidades;

.mi-card {
  padding: list.nth(utilidades.$paddings, 4); // usa el 4º valor de $paddings
  font-size: list.nth(utilidades.$font-size-lista, 3);
  font-family: map.get(utilidades.$font-families, 'default');
}
```

O, si el proyecto `@use "../01_utilities/index" as *;` exporta variables globales, se puede usar directamente:

```scss
@use '../01_utilities/index' as *;
.mi-card {
  padding: list.nth($paddings, 4);
}
```

**2) CSS Custom Properties generadas en `:root` (patrones)**
Los archivos bajo `03_global` generan variables CSS (custom properties) en `:root`. Aquí los patrones principales:

- `--mlt-sys-border-radius-<n>` — radios (ej. `--mlt-sys-border-radius-1`).
- `--mlt-sys-box-shadow-<n>` — sombras (ej. `--mlt-sys-box-shadow-2`).
- `--color-<nombre>-<n>` — colores por paleta y tono (ej. `--color-azul-3`).
- `--mlt-sys-font-family-<name>` — familias tipográficas (ej. `--mlt-sys-font-family-default`).
- `--mlt-sys-font-size-<n>` — tamaños de fuente (ej. `--mlt-sys-font-size-4`).
- `--mlt-sys-font-weight-<n>` — pesos (ej. `--mlt-sys-font-weight-3`).
- `--mlt-sys-gap-<n>` — gaps (ej. `--mlt-sys-gap-2`).
- `--mlt-sys-height-<n>` — alturas (ej. `--mlt-sys-height-3`).
- `--mlt-sys-margin-<n>` — márgenes (ej. `--mlt-sys-margin-2`).
- `--mlt-sys-padding-<n>` — paddings (ej. `--mlt-sys-padding-2`).

Ejemplo usando una custom property en CSS:

```css
.card {
  border-radius: var(--mlt-sys-border-radius-1);
  box-shadow: var(--mlt-sys-box-shadow-2);
}
```

**3) Clases utilitarias globales (patrones detectados)**
Los archivos `03_global` también generan clases utilitarias con prefijo `g--`.

- `.g--box-shadow-<n>` — aplica `box-shadow: var(--mlt-sys-box-shadow-<n>)`.
- `.g--color-<paleta>-<n>` — aplica `color: var(--color-<paleta>-<n>)`.
- `.g--background-color-<paleta>-<n>` — aplica `background-color: var(--color-<paleta>-<n>)`.
- `.g--font-size-<n>` — aplica `font-size: var(--mlt-sys-font-size-<n>)`.
- `.g--gap-<n>` — aplica `gap: var(--mlt-sys-gap-<n>)`.
- `.g--height-<n>` — aplica `height: var(--mlt-sys-height-<n>)`.
- `.g--margin-<n>` — aplica `margin: var(--mlt-sys-margin-<n>)`.
- `.g--padding-<n>` — aplica `padding: var(--mlt-sys-padding-<n>)`.

Ejemplos HTML (uso directo de utilidades):

```html
<div class="g--background-color-azul-4 g--padding-3">
  <h3 class="g--color-gris-2 g--font-size-4">Título</h3>
  <p class="g--color-gris-6">Texto</p>
</div>
```

Ejemplo aplicando sombra utilitaria:

```html
<div class="g--box-shadow-2">Caja con sombra</div>
```

**4) Cómo consultar valores concretos**

- Para ver los valores exactos de las paletas: abre `src/app/scss/01_utilities/_variables.scss` y revisa la entrada del `$colores` (cada paleta es una lista de tonos).
- Para ver los tamaños (padding, margin, font-size): revisa `$paddings`, `$margins`, `$font-size-lista` en `_variables.scss`.

**5) Ejemplos SCSS combinados**
Usar SASS para construir una clase que utilice tanto variables SASS como custom properties:

````scss
# Resumen global de variables y clases (SCSS / CSS)

Este documento resume las variables SASS y las clases/utilidades globales que aparecen en tu proyecto (archivos de `src/app/scss/...`), junto con ejemplos de uso.

**Archivos de referencia**

- `src/app/scss/01_utilities/_variables.scss` — variables SASS globales.
- `src/app/scss/03_global/_index.scss` y sus ficheros parciales (`_colors.scss`, `_font-size.scss`, `_margin.scss`, `_padding.scss`, `_box-shadow.scss`, `_height.scss`, `_gap.scss`, `_border-radius.scss`, `_font-family.scss`, `_font-weight.scss`, ...)

**1) Variables SASS globales (definidas en `_variables.scss`)**

- `$paddings` — lista de valores de padding.
- `$margins` — lista de valores de margin.
- `$font-size-lista` — lista de tamaños de fuente.
- `$font-families` — mapa con familias tipográficas (ej. `"default"`).
- `$font-weight` — lista con pesos de fuente.
- `$gap` — lista con tamaños de gap.
- `$border-radius` — lista con valores (como `50`).
- `$box-shadow` — lista con valores de sombra.
- `$widths` — lista con anchos.
- `$heights` — lista con alturas.
- `$colores` — mapa con paletas por nombre (ej. `"azul"`, `"gris"`, `"rojo"`, ...)

Ejemplo SCSS (leer variables desde el módulo de utilidades):

```scss
@use '../01_utilities/_index.scss' as utilidades;

.mi-card {
  padding: list.nth(utilidades.$paddings, 4); // usa el 4º valor de $paddings
  font-size: list.nth(utilidades.$font-size-lista, 3);
  font-family: map.get(utilidades.$font-families, 'default');
}
````

O, si el proyecto `@use "../01_utilities/index" as *;` exporta variables globales, se puede usar directamente:

```scss
@use '../01_utilities/index' as *;
.mi-card {
  padding: list.nth($paddings, 4);
}
```

**2) CSS Custom Properties generadas en `:root` (patrones)**
Los archivos bajo `03_global` generan variables CSS (custom properties) en `:root`. Aquí los patrones principales:

- `--mlt-sys-border-radius-<n>` — radios (ej. `--mlt-sys-border-radius-1`).
- `--mlt-sys-box-shadow-<n>` — sombras (ej. `--mlt-sys-box-shadow-2`).
- `--color-<nombre>-<n>` — colores por paleta y tono (ej. `--color-azul-3`).
- `--mlt-sys-font-family-<name>` — familias tipográficas (ej. `--mlt-sys-font-family-default`).
- `--mlt-sys-font-size-<n>` — tamaños de fuente (ej. `--mlt-sys-font-size-4`).
- `--mlt-sys-font-weight-<n>` — pesos (ej. `--mlt-sys-font-weight-3`).
- `--mlt-sys-gap-<n>` — gaps (ej. `--mlt-sys-gap-2`).
- `--mlt-sys-height-<n>` — alturas (ej. `--mlt-sys-height-3`).
- `--mlt-sys-margin-<n>` — márgenes (ej. `--mlt-sys-margin-2`).
- `--mlt-sys-padding-<n>` — paddings (ej. `--mlt-sys-padding-2`).

Ejemplo usando una custom property en CSS:

```css
.card {
  border-radius: var(--mlt-sys-border-radius-1);
  box-shadow: var(--mlt-sys-box-shadow-2);
}
```

**3) Clases utilitarias globales (patrones detectados)**
Los archivos `03_global` también generan clases utilitarias con prefijo `g--`.

- `.g--box-shadow-<n>` — aplica `box-shadow: var(--mlt-sys-box-shadow-<n>)`.
- `.g--color-<paleta>-<n>` — aplica `color: var(--color-<paleta>-<n>)`.
- `.g--background-color-<paleta>-<n>` — aplica `background-color: var(--color-<paleta>-<n>)`.
- `.g--font-size-<n>` — aplica `font-size: var(--mlt-sys-font-size-<n>)`.
- `.g--gap-<n>` — aplica `gap: var(--mlt-sys-gap-<n>)`.
- `.g--height-<n>` — aplica `height: var(--mlt-sys-height-<n>)`.
- `.g--margin-<n>` — aplica `margin: var(--mlt-sys-margin-<n>)`.
- `.g--padding-<n>` — aplica `padding: var(--mlt-sys-padding-<n>)`.

Ejemplos HTML (uso directo de utilidades):

```html
<div class="g--background-color-azul-4 g--padding-3">
  <h3 class="g--color-gris-2 g--font-size-4">Título</h3>
  <p class="g--color-gris-6">Texto</p>
</div>
```

Ejemplo aplicando sombra utilitaria:

```html
<div class="g--box-shadow-2">Caja con sombra</div>
```

**4) Cómo consultar valores concretos**

- Para ver los valores exactos de las paletas: abre `src/app/scss/01_utilities/_variables.scss` y revisa la entrada del `$colores` (cada paleta es una lista de tonos).
- Para ver los tamaños (padding, margin, font-size): revisa `$paddings`, `$margins`, `$font-size-lista` en `_variables.scss`.

**5) Ejemplos SCSS combinados**
Usar SASS para construir una clase que utilice tanto variables SASS como custom properties:

```scss
@use '../01_utilities/_index.scss' as util;

.mi-boton {
  // usar un tamaño de la lista SASS
  padding: list.nth(util.$paddings, 3);
  // usar color desde custom property (generada a partir del mapa $colores)
  background-color: var(--color-azul-5);
  border-radius: var(--mlt-sys-border-radius-1);
}
```

**Notas**

- Los prefijos `mlt-sys` y `g--` son consistentes: `mlt-sys` para variables CSS del sistema y `g--` para clases utilitarias.
- Si necesitas que incluya aquí un listado expandido con todos los índices (por ejemplo, `--color-azul-1` … `--color-azul-9`) puedo generar ese bloque automáticamente leyendo los arrays y mapas del proyecto.

---

## BEM — Uso con variables y clases globales

Esta sección muestra cómo aplicar las variables SASS, las CSS custom properties generadas en `:root` y las clases utilitarias `g--*` siguiendo la metodología BEM, usando el patrón aplicado en `c-header-bem.scss` como referencia.

- **Idea clave:** Definir variables CSS a nivel de _block_ (`.c-block { --c-block-... }`) para mantener la API del bloque estable y permitir overrides sencillos desde el markup o temas.

Ejemplo de patrón (SCSS) — basado en `c-header-bem.scss`:

```scss
.c-header {
  // variables del bloque (override posible desde otras hojas si hace falta)
  --c-header-font-family: var(--mlt-sys-font-family-default);
  --c-header-padding: var(--mlt-sys-padding-4);
  --c-header-gap: var(--mlt-sys-gap-5);
  --c-header-background-color: var(--color-gris-3);
  --c-header-height: var(--mlt-sys-height-2);

  display: flex;
  flex-direction: row;
  background: var(--c-header-background-color);
  padding: var(--c-header-padding);

  &__brand-name {
    font-family: var(--c-header-font-family);
    font-size: var(--c-header-box-title-font-size);
    color: var(--c-header-font-title-color);
  }

  &__nav {
    /* ... */
  }
  &__item {
    margin-left: var(--c-header-box-margin);
  }
  &__item--highlight {
    color: var(--c-header-font-title-color);
  }
}
```

HTML de ejemplo (uso BEM + utilidades):

```html
<nav class="c-header g--padding-4 g--gap-3">
  <h2 class="c-header__brand-name">TheBarberHub</h2>
  <ul class="c-header__nav">
    <li class="c-header__item"><a class="c-header__link" routerLink="/">Inicio</a></li>
    <li class="c-header__item c-header__item--highlight">
      <span class="c-header__highlight">3 Pedidos</span>
    </li>
  </ul>
</nav>
```

Buenas prácticas y motivos:

- Definir custom properties en el bloque (`--c-block-*`) permite cambiar solo ese bloque sin tocar las variables globales.
- Usar `var(--mlt-sys-...)` dentro de las props del bloque (como en el ejemplo) conecta la escala del sistema con la API del componente.
- Mantén los nombres de props con prefijo del bloque (`--c-header-`) para evitar colisiones entre bloques.
- Usa los utilitarios `g--*` para atajos (spacing, colores, sombras) y evitar repetir reglas simples en cada bloque.

Cómo crear un modificador (BEM) con variables:

```scss
.c-card {
  --c-card-bg: var(--color-blanco-1);
  background: var(--c-card-bg);

  &--featured {
    --c-card-bg: var(--color-amarillo-5);
    box-shadow: var(--mlt-sys-box-shadow-2);
  }
}
```

Explicación: el modificador `c-card--featured` redefine la custom property `--c-card-bg` solo para las instancias con el modificador, sin tocar la regla base.

Consejos de estilo SCSS (naming y estructura):

- Prefiere `styleUrls` con un único archivo SCSS por componente (ej. `c-header.scss`) que importe partials si necesita más código.
- Mantén la definición de custom props al inicio del bloque (como en `c-header-bem.scss`) para una lectura rápida.
- Evita usar `!important` salvo en utilidades globales; deja que las custom props ofrezcan el mecanismo de override.

Ejemplo práctico: crear un nuevo componente `c-footer` siguiendo el patrón

1. En `c-footer.scss` define las props del bloque al inicio:

```scss
.c-footer {
  --c-footer-padding: var(--mlt-sys-padding-3);
  padding: var(--c-footer-padding);
}
```

2. Usa elementos y modificadores con `&__element` y `&--modifier`.

3. Aplica utilidades cuando convenga (`<div class="c-footer g--padding-3 g--background-color-azul-4">`).

Si quieres, puedo expandir esta sección con ejemplos concretos para todos los utilitarios (`g--padding-1` … `g--padding-6`, `--color-azul-1` … `--color-azul-9`, etc.) y generar una tabla que puedas pegar en la docs.
