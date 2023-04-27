# Getting Started
The design system consists of a set of [guidelines](../guidelines.md) and components. For projects that use Vue we have a specific [Vue component library](../vue-components/README.md), but if you're not using Vue it's still possible to use the components by importing the CSS library.

## Installation
Currently the CSS classes are a part of the Vue components package, so you need to install that to be able to use them. In addition you need the [tokens](../tokens/README.md) because the CSS classes are based on them.

### Install packages
[![vue components version](https://img.shields.io/npm/v/@bcc-code/vue-components/latest?label=%40bcc-code%2Fvue-components)](https://github.com/bcc-code/bcc-vue-components/releases) [![design tokens version](https://img.shields.io/npm/v/@bcc-code/design-tokens/latest?label=%40bcc-code%2Fdesign-tokens)](https://github.com/bcc-code/bcc-design-tokens/releases)

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

### Import CSS
Make sure to include the CSS classes in your app somewhere, for example by importing the component CSS in your main CSS file.

```css
/* main.css */
@import "@bcc-code/vue-components/style.css";
```

You will need to do your own purging of classes if you only want to include the component classes you're using, because we can't determine that when compiling the library.

## Adding classes
The classes follow a naming convention of `.bcc-<component-name><-optional-modifier>`, so for example the button has `.bcc-button` base class and `.bcc-button-primary` for the primary variant and `.bcc-button-xl` for the `xl` size. Applying all three classes gives you an XL primary button.

At the moment there is no separate documentation about all the CSS classes. One way to find out which classes to use are to use Inspect element on the [Vue components Storybook](https://vue-components-storybook.developer.bcc.no/) to view which classes are added with which prop. Or check out the [components source](https://github.com/bcc-code/bcc-vue-components/tree/main/src/components).
