---
order: 30
---
# Anatomy of a component
This is an overview of how most components in this library are structured with regards to props and classes, and is intended as a guide for a developer looking to implement their own component.

```ts
<script setup lang="ts">
```
Most components will use `script setup`.

```ts
import { cva, type VariantProps } from "class-variance-authority";

const buttonClassVariants = cva("font-semibold inline-flex items-center", {
  variants: {
    variant: {
      primary: "",
      secondary: "outline ...",
      tertiary: "",
    },
    disabled: {
      true: "text-neutral-500 ...",
      false: "cursor-pointer",
    },
    // ...
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: true,
      class: "bg-neutral-300",
    },
    {
      variant: "secondary",
      disabled: true,
      class: "outline-neutral-300 ...",
    },
    {
      variant: "primary",
      disabled: false,
      class: "...",
    },
   // ...
  ],
  defaultVariants: {
    variant: "primary",
  },
});
```
For dynamically adding classes, the [class-variance-authority](https://github.com/joe-bell/cva) package is used. This package provides a nice API to dynamically generate the Tailwind classes for a component, based on the props. It is recommended to read [the documentation](https://cva.style/docs) of the package, but in short you see the following things here:

- `font-semibold inline-flex items-center` are the classes that are always applied to this button component
- Two **variants** are declared, one coincidentally name `variant`, the other `disabled` (other variants omitted for brevity).
- Some of the variants have classes that are always added if the corresponding prop is set to this value, like `secondary`. Others, like `primary`, don't have classes by default.
- Several **compoundVariants** are declared. These give you the opportunity to style the component only if two props have a certain value. It is also possible to use an array instead of a string to enable it for multiple values of the same variant. In this case, a disabled primary button will have a class of `bg-neutral-300`, while a disabled secondary button will have `outline-neutral-300`, and an enabled primary button will have different classes.
- **defaultVariants** are optional as they are often superseded by declaring the default value for the whole Vue component, see below.

```ts
type ButtonVariants = VariantProps<typeof buttonClassVariants>;

type Props = {
  variant?: ButtonVariants["variant"];
  disabled?: boolean;
  // ...
};
```

We then use the `VariantProps` helper from `cva` to extract all the variants from the class variants declaration. This enables us to use this for our props, so that TypeScript can correctly infer all possible options. In this case the `variant` prop will get a union type of `"primary"|"secondary"|"tertiary"`.

It is recommended to use native types like `boolean` where possible, even if it is also declared in the class variants, as this provides slightly better integration with Storybook and your local IDE.

Additionally note that all props in this case are optional.

```ts
withDefaults(defineProps<Props>(), {
  variant: "primary",
  disabled: false,
  // ...
});
</script>
```

Then we end our script declaration by declaring the props with their default values. This means that the `defaultVariants` declared above won't actually be used.

```vue
<template>
  <button
    :disabled="disabled"
    :class="buttonClassVariants({ variant, disabled, ... })"
  >
      <slot></slot>
  </button>
</template>
```

In the template, we use the class variants function we created with `cva` to get our classes. We need to pass all relevant props to this function, so the actual value of the prop is used.

This is in short how most components in this library look and how they apply classes to components. Be sure to look at existing components for up-to-date versions.
