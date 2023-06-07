---
order: 10
---
# Vue components
::: warning
This documentation is work in progress of a new setup. Refer to the existing [CSS library](../css-library/README.md) or [Vue components](../vue-components/README.md) documentation for usage with the latest released version.
:::

## Prerequisites
The Vue components depend on [Vue 3](https://vuejs.org/). The components are intended to be used together with [Tailwind](https://tailwindcss/com). It is possible to use the components in a project without Tailwind but this has a few caveats.

## Installation and usage
### Vue apps
#### 1. Install package
[![vue components version](https://img.shields.io/npm/v/@bcc-code/vue-components/latest?label=%40bcc-code%2Fvue-components)](https://github.com/bcc-code/bcc-design-components/releases)

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```sh
pnpm add @bcc-code/vue-components@latest
```
  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```sh
npm install @bcc-code/vue-components@latest
```

  </CodeGroupItem>
</CodeGroup>

#### 2. Import CSS
##### Tailwind
The Vue components are lightweight wrapper around the CSS library. You need to import the CSS classes in your main CSS file to be able to use them:

```css
/* main.css */
@import "@bcc-code/vue-components/tailwind/index.css";

@tailwind ...
```

In some cases this might not work, depending on the set up of your build tool, which means you need to use the path to the location of this file on disk:

```css
/* main.css */
@import "node_modules/@bcc-code/vue-components/dist_css/tailwind/index.css";

@tailwind ...
```

All classes are added on the Tailwind [component layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer), which means that even if the CSS is imported at the top of the file it will still be inserted at the right place in your CSS, so component classes can be overridden with utility classes.

##### Without Tailwind
We strongly recommend to use Tailwind, especially in new apps, but if this is not possible due to an existing setup, you can include the compiled CSS file in your CSS:

```css
/* main.css */
@import "@bcc-code/vue-components/style.css";
```

Or if you need to use the full path:

```css
/* main.css */
@import "node_modules/@bcc-code/vue-components/dist/style.css";
```

This approach has a few caveats:
  - Only the component classes are included, not other design system tokens.
  - All classes for all components are included, so you need to do your own purging of classes if you want to only include what you use.

### 4. Import tokens in your Tailwind config
You need to import the theme you want in your `tailwind.config.js`.

::: tip HEADS UP
Be sure to import the Vue components in your Tailwind `content` config, otherwise the utilities used by the library will not be present in your CSS output.
:::

```js{2,6-8,11}
// tailwind.config.cjs
const themes = require("@bcc-code/vue-components");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    themes.bccForbundetTheme
  ],
  content: [
    "./src/**/*.{vue,ts}",
    "./node_modules/@bcc-code/vue-components/dist/vue-components.js",
  ],
  plugins: [
    themes.tailwindPlugin
  ],
};
```

#### Disable dark mode
In the future, dark mode styles will be enabled by default, which can lead to washed out colors if your app only has a light mode (because the library will follow the system setting for dark mode). It is therefore recommended to turn off dark mode in your app. It is not possible to turn off dark mode support in Tailwind but by changing to the [class strategy](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) dark mode won't trigger as long as you don't put a `dark` class on your HTML.

```js
// tailwind.config.cjs
module.exports = {
  // ...
  darkMode: 'class',
  // ...
}
```
