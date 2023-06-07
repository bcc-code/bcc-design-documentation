# Getting Started
::: warning
This documentation is work in progress of a new setup. Refer to the existing [CSS library](../css-library/README.md) or [Vue components](../vue-components/README.md) documentation for usage with the latest released version.
:::

The design system consists of a set of [guidelines](../guidelines.md) and components. At the moment these components can be used by installing one of these libraries:

- [@bcc-code/vue-components](./vue-components.md) when using Vue 3
- [@bcc-code/design-components](./css-library.md) when not using Vue 3.

## Usage without npm
In projects that lack a setup with npm, like for example WordPress, you can still include the compiled CSS file from a CDN, for example from Unpkg:

```
https://unpkg.com/@bcc-code/vue-components@latest/dist/style.css
```

Note that it's recommended to pin the version to a specific [version](https://github.com/bcc-code/bcc-design-components/releases) of the Vue components instead of the `latest` tag.

::: warning HEADS UP
This will just include the component classes and other design system tokens, and we therefore do recommend looking into a setup with npm and optionally Tailwind to easily apply all aspects of the design system to your interface.
:::
