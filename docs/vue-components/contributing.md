---
order: 10
---
# Contributing Guide
Components are usually first implemented in Figma by a designer and can then be implemented as a Vue component by a developer.

## Goal of the component library
We welcome any contributions to the component library. It might be of interest to know the goals behind this:

- **Consistent branding** across BCC software products: the primary goal behind the whole design system which informs all our decisions.
- **Reduce development time and cost** for new projects through reusable UI/UX: the primary goal behind the component library. We solve UI challenges so developers can focus on their business logic.
- **Cost effective and future-proof** solution: the component library needs to be maintainable with relatively low effort.
- **Pragmatic adoption** in existing ecosystem (Vue, Directus, Tailwind): the component library is specifically built for technologies that are broadly used in BCC IT so developers can start using it in their existing apps as well.

## Checklist
Before a component can be added to the library, answer these questions affirmatively.

- Is the component **reusable**? If you have a Vue component in a local project that is aligned with the design system, it probably should be in the component library. Make sure to check with a designer so it makes it way into the design system.
- Are all **states** from the design implemented? Has the implementation been checked by a designer? Only states from the design should be implemented.
- Does the **public API** of the component make sense? Are the props and slots properly named? Is this public API consistent with other components in the component library?
- Has **accessibility** been taken into account? Does every relevant part have ARIA roles? Do images have an alt tag that is always set, and are decorative elements marked as such? How does the component look without CSS?
- Are **keyboard shortcuts** implemented? Does the component behave like expected when navigating by keyboard? Especially pay attention to this when imitating a native HTML element such as a button as users expect it to work in a certain way.
- Has the component been **documented**? Is there a usage example? Make sure all different states are covered by a story.

## Adding a component
Figma designs are often based on [Flowbite](https://flowbite.com/docs/getting-started/introduction/). This means that the Flowbite markup can be used as a base, but will generally need customization both in terms of styling and additions such as accessibility. We do not use Flowbite's Vue library, but instead build our own Vue components. This gives us full control over the markup.

Start by creating a new component:
```sh
npm run create-component ComponentName
```

Every component should be prefixed with `Bcc`, such as `BccButton`. This prevents clashes with local components and native HTML elements.

## Do's and Don'ts
See also: [Writing Storybook stories](./writing-storybook-stories.md).

### Props
#### Follow Figma naming for props
Props should be (if possible) be named like they are named in Figma. Usually designers will create a component in Figma that has properties as well. By keeping these as close as possible it's easier to compare different variants between design and code.

#### Don't abbreviate props
Props should have a clear name that indicates what it is for, without the need to look up documentation. Abbreviations make this harder, especially for non-native speakers. Instead of trying to save on keystrokes (and modern editors will probably autocomplete props anyways), we'll save on potential user frustration.

#### Don't include all attributes as props
When building a wrapper around a native HTML element such as `input`, don't include all the attributes of this element as props on the component. Vue will automatically [pass them through](https://vuejs.org/guide/components/attrs.html). If the element is not the top level element in your component (for example because it is wrapped in a `span`), bind the Vue `$attrs` property to the appropriate element.

First disable the default attribute inheritance with a non-`setup` script tag:
```vue
<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>
```

And then bind the `$attrs` to the element:

```vue
<input v-bind="$attrs" />
```

From the [Vue documentation](https://vuejs.org/guide/components/attrs.html#disabling-attribute-inheritance):
> The `$attrs` object includes all attributes that are not declared by the component's `props` or `emits` options

### Styling
#### Don't use `<style>` in an SFC
Commonly, a Vue Single File Component (SFC) includes a `script`, `template`, and `style` tag. The use of a `style` tag should be avoided, for two reasons:
1. Adding classes this way will generate a CSS file in the output. We don't want consumers of this Vue component library having to include a separate CSS file
2. Since we're using Tailwind, it's not needed to write any CSS. By ruling out the possibility of using custom classes, even when they're `scoped`, it's clear where CSS styling comes from: Tailwind

#### Don't use `outline`
Do not use the `outline` utilities from Tailwind for your components. These do not work in combination with a border radius on Safari versions previous to 16.4, making the outline square instead of following the border radius. Instead, use `border` or `ring`.
