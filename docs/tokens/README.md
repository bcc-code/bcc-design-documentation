---
sectionOrder: 50
---

# Design system tokens
The BCC design system uses tokens to style different components. This enables a theming approach where the specific meaning of a token, such as which color is `primary` or `danger`, can change.

[![design tokens version](https://img.shields.io/npm/v/@bcc-code/design-tokens/latest?label=%40bcc-code%2Fdesign-tokens)](https://github.com/bcc-code/bcc-design-tokens/releases)

Install the tokens package with npm:
```sh
npm install @bcc-code/design-tokens@latest
```

::: warning HEADS UP
Be aware that the tokens currently are only useable in Tailwind and with the default BCC Forbundet theme. We're still iterating on this, so expect support for more platforms and themes in the future.
:::

## Import tokens in your Tailwind config
You need to import the theme you want in your `tailwind.config.js`. The tokens are exposed as a theme using Tailwind's [preset](https://tailwindcss.com/docs/presets) feature. 

```js{2,6-8}
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

### Customize theme
If you want to customize the Tailwind `theme` in your local project, you can add a `theme` config like normal, in which you can even override the config from the tokens.

### Installing unreleased version
To run code that has been merged but not released yet, install the `dev` version which points to the latest commit on the `main` branch:
```sh
npm install @bcc-code/design-tokens@dev
```
