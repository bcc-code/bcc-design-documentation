---
order: 25
---

# Tokens

Included in the components package are the design system tokens. At the moment these are primarily colors, such as `bg-primary` and `border-button-secondary`.

## Using tokens
Every color token is included as a Tailwind utility class, such as `.bg-primary`. These classes point to CSS variables, such as `var(--bg-primary)`. These variables can also be used if you're not using Tailwind by [including the compiled CSS](./css-library.md#without-tailwind).

## Available tokens
There is currently no visual overview of all the tokens, but you can take a look at the source code of the components package to view both the [Tailwind utilities](https://github.com/bcc-code/bcc-design-components/tree/main/src/tokens/tailwind) and [CSS variables](https://github.com/bcc-code/bcc-design-components/tree/main/src/tokens/variables).
