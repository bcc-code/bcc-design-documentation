# Getting Started
The design system consists of a set of [guidelines](../guidelines.md) and components. For projects that use Vue we have a specific [Vue component library](../vue-components/README.md), but if you're not using Vue it's still possible to use the components by importing the CSS library.

## Usage
The CSS library can be used in four different ways. Depending on your project configuration you can include the components via npm, or just include a compiled CSS file. 
You will need to do your own purging of classes if you only want to include the component classes you're using, because we can't determine that when compiling the library. When using the default setup Tailwind takes care of this.

### 1. Project with Vue and Tailwind
We have first class support for Vue, see the [Vue components](../vue-components/README.md) documentation on how to set it up.

### 2. Project with npm and Tailwind
In a frontend/JavaScript project without Vue, but where you still use npm and Tailwind, follow the [installation instructions](../vue-components/README.md#2-install-packages) for the components, as the setup is the same even if you're not using Vue.

### 3. Project with npm and without Tailwind
It is strongly recommended to use Tailwind in any case. This can be achieved by installing Tailwind and [prefixing](https://tailwindcss.com/docs/configuration#prefix) all Tailwind classes so they don't clash with your existing CSS. Then follow the [installation instructions](../vue-components/README.md#2-install-packages) for the components.

If that is not possible, you can still include the compiled CSS file from the components. Note that this does not include the tokens currently, so you can just use the component classes.

First install the components package:

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

Then include the `style.css` file somewhere in your application, for example by importing it in your main CSS file:

```css
/* main.css */
@import "@bcc-code/vue-components/style.css";
```

### 4. Project without npm and Tailwind
In projects that lack a setup with npm and Tailwind, like for example WordPress, you can still include the compiled CSS file from a CDN, for example from Unpkg:

```
https://unpkg.com/@bcc-code/vue-components@latest/dist/style.css
```

Note that it's recommended to pin the version to a specific [version](https://github.com/bcc-code/bcc-design-components/releases) of the Vue components instead of the `latest` tag.

::: warning HEADS UP
This will just include the component classes and not the [tokens](../tokens/README.md), and we therefore do recommend looking into a setup with npm and Tailwind to easily apply all aspects of the design system to your interface.
:::

## Using classes
The classes follow a naming convention of `.bcc-<component-name><-optional-modifier>`, so for example the button has `.bcc-button` base class and `.bcc-button-primary` for the primary variant and `.bcc-button-xl` for the `xl` size. Applying all three classes gives you an XL primary button.

At the moment there is no separate documentation about all the CSS classes. One way to find out which classes to use are to use Inspect element on the [Vue components Storybook](https://vue-components-storybook.developer.bcc.no/) to view which classes are added with which prop. Or check out the [components source](https://github.com/bcc-code/bcc-design-components/tree/main/src/components).
