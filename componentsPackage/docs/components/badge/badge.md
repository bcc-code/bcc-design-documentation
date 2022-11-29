
<script setup>
</script>

# Vue Badge Component - Flowbite

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components

---

::: tip

Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)

:::

::: tip
This is a tip
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.
Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Default badge
 
```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
  <Badge />
  <Badge type="dark" />
  <Badge type="red" />
  <Badge type="green" />
  <Badge type="yellow" />
  <Badge type="indigo" />
  <Badge type="purple" />
  <Badge type="pink" />
</template>
```
<badge-examples-BadgeTypesExample />

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope@next
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope@next
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope@next
```

:::