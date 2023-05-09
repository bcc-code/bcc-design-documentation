# Getting Started
The `@bcc-code/vue-components` package is a collection of components that conform to the BCC Design System, implemented in [Vue.js](https://vuejs.org/) and styled with [Tailwind](https://tailwindcss.com).

View the components with [Storybook](https://vue-components-storybook.developer.bcc.no)

## Installation
### 1. Prerequisites
Ensure Tailwind v3 and Vue 3 are installed in your project, as the components depend on both.

Be sure to read the [design system guidelines](../guidelines.md) to know how and when to use components.

### 2. Install packages
[![vue components version](https://img.shields.io/npm/v/@bcc-code/vue-components/latest?label=%40bcc-code%2Fvue-components)](https://github.com/bcc-code/bcc-vue-components/releases) [![design tokens version](https://img.shields.io/npm/v/@bcc-code/design-tokens/latest?label=%40bcc-code%2Fdesign-tokens)](https://github.com/bcc-code/bcc-design-tokens/releases)

The components in the package are styled with the design tokens, which you need to install as well:
<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```sh
pnpm add @bcc-code/vue-components@latest @bcc-code/design-tokens@latest
```
  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```sh
npm install @bcc-code/vue-components@latest @bcc-code/design-tokens@latest
```

  </CodeGroupItem>
</CodeGroup>

### 3. Import CSS
The Vue components are lightweight wrapper around the CSS library. You need to import the CSS classes in your main CSS file to be able to use them:

```css
/* main.css */
@import "@bcc-code/vue-components/tailwind/index.css";

@tailwind ...
```

All classes are added on the Tailwind [component layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer), which means that even if the CSS is imported at the top of the file it will still be inserted at the right place in your CSS, so component classes can be overridden with utility classes.

### 4. Import tokens in your Tailwind config
The components are styled with classes that are exported by the design tokens. You need to import the theme you want in your `tailwind.config.js`.

::: tip HEADS UP
Be sure to import the Vue components in your Tailwind `content` config, otherwise the utilities used by the library will not be present in your CSS output.
:::

```js{2,6-8,11}
// tailwind.config.cjs
const themes = require("@bcc-code/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    themes.bccForbundetTheme
  ],
  content: [
    "./src/**/*.{vue,ts}",
    "./node_modules/@bcc-code/vue-components/dist/vue-components.js",
  ],
  plugins: [],
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

### Icons
The Vue components will work with any SVG icon but are designed to work with the icons from the design system. See the [icons documentation](../icons/README.md) for installation and usage instructions.

### Installing unreleased version
To run code that has been merged but not released yet, install the `dev` version which points to the latest commit on the `main` branch:
<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```sh
pnpm add @bcc-code/vue-components@dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```sh
npm install @bcc-code/vue-components@dev
```

  </CodeGroupItem>
</CodeGroup>
