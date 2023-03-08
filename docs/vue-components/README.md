# Introduction
The `@bcc-code/vue-components` package is a collection of components that conform to the BCC Design System, implemented in [Vue.js](https://vuejs.org/) and styled with [Tailwind](https://tailwindcss.com).

View the components with [Storybook](https://vue-components-storybook.developer.bcc.no)

## Installation
### Prerequisites
Ensure Tailwind v3 and Vue 3 are installed in your project, as the components depend on both.

### Install packages
[![vue components version](https://img.shields.io/npm/v/@bcc-code/vue-components/latest?label=%40bcc-code%2Fvue-components)](https://github.com/bcc-code/bcc-vue-components/releases) [![design tokens version](https://img.shields.io/npm/v/@bcc-code/design-tokens/latest?label=%40bcc-code%2Fdesign-tokens)](https://github.com/bcc-code/bcc-design-tokens/releases)

The components in the package are styled with the design tokens, which you need to install as well:
```sh
npm install @bcc-code/vue-components@latest @bcc-code/design-tokens@latest
```

### Import tokens in your Tailwind config
The components are styled with classes that are exported by the design tokens. You need to import the theme you want in your `tailwind.config.js`. For example:

```js
// tailwind.config.cjs
const themes = require("@bcc-code/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts}"],
  theme: themes.bccForbundetTheme,
  plugins: [],
};
```

### Icons
See [Icons documentation](../icons/README.md)

### Installing unreleased version
To run code that has been merged but not released yet, install the `dev` version which points to the latest commit on the `main` branch:
```sh
npm install @bcc-code/vue-components@dev
```
