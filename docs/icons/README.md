---
sectionOrder: 50
---

# BCC icons
The icons used in the BCC design system are SVG icons based on [Material Symbols](https://fonts.google.com/icons).

[![icons version](https://img.shields.io/npm/v/@bcc-code/icons/latest?label=%40bcc-code%2Ficons)](https://github.com/bcc-code/bcc-icons/releases)

## Usage
The `@bcc-code/icons` package contains raw SVG icons. You can install it from npm:
```sh
npm install @bcc-code/icons
```

But in most cases, you should install a framework-specific package. Currently only a Vue version is offered, which can be used together with the [Vue components](../vue-components/README.md).

### Vue
[![icons-vue version](https://img.shields.io/npm/v/@bcc-code/icons-vue/latest?label=%40bcc-code%2Ficons-vue)](https://github.com/bcc-code/bcc-icons/releases)

First, install `@bcc-code/icons-vue` from npm:

```sh
npm install @bcc-code/icons-vue@latest
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <SearchIcon class="h-6 w-6 text-blue-500"/>
    <p>...</p>
  </div>
</template>

<script setup>
import { SearchIcon } from '@bcc-code/icons-vue'
</script>
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@bcc-code/icons-vue)

