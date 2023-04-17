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
You need to import the theme you want in your `tailwind.config.js`.

```js{2,10}
// tailwind.config.cjs
const themes = require("@bcc-code/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,ts}",
    "./node_modules/@bcc-code/vue-components/dist/vue-components.js",
  ],
  theme: themes.bccForbundetTheme,
  plugins: [],
};
```

### Customize theme
If you want to customize the Tailwind `theme` in your local project, you can import all or parts of the theme by utilizing the spread operator, like this:

```js
  theme: {
    extend: {
      ...themes.bccForbundetTheme.extend,
      // Your custom config here
    },
  }
```

Or selectively import only the parts you need. Be aware that if you are using the Vue components most of the utilities are required, and it's not recommended to entirely omit certain parts of the theme:

```js
  theme: {
    extend: {
      colors: {
        ...themes.bccForbundetTheme.colors,
        'my-custom-color': {
          100: "#123456",
          // ...
        }
      }
    },
  }
```
