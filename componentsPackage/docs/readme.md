# BCC Design Assets

<script setup>
</script>

# Vue Badge Component - Flowbite

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components

---

:::tip
Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.
Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Default badge

Prop – type

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
## Documentation

<p>Technical documentation and guides to facilitate the correct use of the logo of the BCC association, joint initiatives and local congregations on digital platforms (websites, applications etc.).</p>

#### SVG

```bash
https://design.bcc.no/logos/organisation-name_logo.svg
```

<br>
<p>Example 1:</p>

```bash
https://design.bcc.no/logos/bcc-bergen_logo.svg
```

<p style="background-color:#F5F1EA; padding: 1rem">
    <img src="https://design.bcc.no/logos/bcc-bergen_logo.svg" alt="BCC Bergen Logo" />
</p>

<br>

#### PNG

```bash
https://design.bcc.no/logos/organisation-name_logo_color_size.png
```

| **Color**  | **Size(px)**      |
| :--------- | :---------------- |
| dark-green | 32 / 48 / 64 / 72 |
| white      | 32 / 48 / 64 / 72 |

<br>
<p>Example 1:</p>

```bash
https://design.bcc.no/logos/bcc-bergen_logo_dark-green_72.png
```

<p style="background-color:#F5F1EA; padding: 1rem">
    <img src="https://design.bcc.no/logos/bcc-bergen_logo_dark-green_72.png" alt="BCC Bergen Logo Dark-green 72px"/>
</p>

<br>
<p>Example 2:</p>

```bash
https://design.bcc.no/logos/bcc-bergen_logo_white_72.png
```

<p style="background-color:#004E48; padding: 1rem">
    <img src="https://design.bcc.no/logos/bcc-bergen_logo_white_72.png" alt="BCC Bergen Logo White 72px" />
</p>

<br>

## Files url

| **Name**           | **SVG**                                                     | **PNG - Dark green**                                                                                                                                                                                                                                                                                      | **PNG - White**                                                                                                                                                                                                                                                                       |
| :----------------- | :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| bcc_logo_primary   | [[svg]](https://design.bcc.no/logos/bcc_logo_primary.svg)   | [[32]](https://design.bcc.no/logos/bcc_logo_primary_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_primary_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_primary_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_primary_dark-green_72.png)         | [[32]](https://design.bcc.no/logos/bcc_logo_primary_white_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_primary_white_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_primary_white_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_primary_white_72.png)         |
| bcc_logo_secondary | [[svg]](https://design.bcc.no/logos/bcc_logo_secondary.svg) | [[32]](https://design.bcc.no/logos/bcc_logo_secondary_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_secondary_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_secondary_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_secondary_dark-green_72.png) | [[32]](https://design.bcc.no/logos/bcc_logo_secondary_white_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_secondary_white_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_secondary_white_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_secondary_white_72.png) |
| bcc_logo_full      | [[svg]](https://design.bcc.no/logos/bcc_logo_full.svg)      | [[32]](https://design.bcc.no/logos/bcc_logo_full_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_full_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_full_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_full_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc_logo_full_white_32.png) - [[48]](https://design.bcc.no/logos/bcc_logo_full_white_48.png) - [[64]](https://design.bcc.no/logos/bcc_logo_full_white_64.png) - [[72]](https://design.bcc.no/logos/bcc_logo_full_white_72.png)                     |

<br>

| **Organisation**  | **SVG**                                                         | **PNG - Dark green**                                                                                                                                                                                                                                                                                                      | **PNG - White**                                                                                                                                                                                                                                                                                       |
| :---------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bcc-bergen        | [[svg]](https://design.bcc.no/logos/bcc-bergen_logo.svg)        | [[32]](https://design.bcc.no/logos/bcc-bergen_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-bergen_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-bergen_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-bergen_logo_dark-green_72.png)                             | [[32]](https://design.bcc.no/logos/bcc-bergen_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-bergen_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-bergen_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-bergen_logo_white_72.png)                             |
| bcc-drammen-sande | [[svg]](https://design.bcc.no/logos/bcc-drammen-sande_logo.svg) | [[32]](https://design.bcc.no/logos/bcc-drammen-sande_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-drammen-sande_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-drammen-sande_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-drammen-sande_logo_dark-green_72.png) | [[32]](https://design.bcc.no/logos/bcc-drammen-sande_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-drammen-sande_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-drammen-sande_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-drammen-sande_logo_white_72.png) |
| bcc-eiker         | [[svg]](https://design.bcc.no/logos/bcc-eiker_logo.svg)         | [[32]](https://design.bcc.no/logos/bcc-eiker_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-eiker_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-eiker_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-eiker_logo_dark-green_72.png)                                 | [[32]](https://design.bcc.no/logos/bcc-eiker_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-eiker_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-eiker_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-eiker_logo_white_72.png)                                 |
| bcc-grenland      | [[svg]](https://design.bcc.no/logos/bcc-grenland_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-grenland_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-grenland_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-grenland_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-grenland_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-grenland_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-grenland_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-grenland_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-grenland_logo_white_72.png)                     |
| bcc-hallingdal    | [[svg]](https://design.bcc.no/logos/bcc-hallingdal_logo.svg)    | [[32]](https://design.bcc.no/logos/bcc-hallingdal_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-hallingdal_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-hallingdal_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-hallingdal_logo_dark-green_72.png)             | [[32]](https://design.bcc.no/logos/bcc-hallingdal_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-hallingdal_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-hallingdal_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-hallingdal_logo_white_72.png)             |
| bcc-hamar         | [[svg]](https://design.bcc.no/logos/bcc-hamar_logo.svg)         | [[32]](https://design.bcc.no/logos/bcc-hamar_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-hamar_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-hamar_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-hamar_logo_dark-green_72.png)                                 | [[32]](https://design.bcc.no/logos/bcc-hamar_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-hamar_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-hamar_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-hamar_logo_white_72.png)                                 |
| bcc-harstad       | [[svg]](https://design.bcc.no/logos/bcc-harstad_logo.svg)       | [[32]](https://design.bcc.no/logos/bcc-harstad_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-harstad_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-harstad_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-harstad_logo_dark-green_72.png)                         | [[32]](https://design.bcc.no/logos/bcc-harstad_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-harstad_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-harstad_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-harstad_logo_white_72.png)                         |
| bcc-horten        | [[svg]](https://design.bcc.no/logos/bcc-horten_logo.svg)        | [[32]](https://design.bcc.no/logos/bcc-horten_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-horten_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-horten_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-horten_logo_dark-green_72.png)                             | [[32]](https://design.bcc.no/logos/bcc-horten_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-horten_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-horten_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-horten_logo_white_72.png)                             |
| bcc-honefoss      | [[svg]](https://design.bcc.no/logos/bcc-honefoss_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-honefoss_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-honefoss_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-honefoss_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-honefoss_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-honefoss_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-honefoss_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-honefoss_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-honefoss_logo_white_72.png)                     |
| bcc-molde         | [[svg]](https://design.bcc.no/logos/bcc-molde_logo.svg)         | [[32]](https://design.bcc.no/logos/bcc-molde_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-molde_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-molde_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-molde_logo_dark-green_72.png)                                 | [[32]](https://design.bcc.no/logos/bcc-molde_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-molde_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-molde_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-molde_logo_white_72.png)                                 |
| bcc-maloy         | [[svg]](https://design.bcc.no/logos/bcc-maloy_logo.svg)         | [[32]](https://design.bcc.no/logos/bcc-maloy_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-maloy_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-maloy_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-maloy_logo_dark-green_72.png)                                 | [[32]](https://design.bcc.no/logos/bcc-maloy_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-maloy_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-maloy_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-maloy_logo_white_72.png)                                 |
| bcc-oslo-og-follo | [[svg]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo.svg) | [[32]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_dark-green_72.png) | [[32]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-oslo-og-follo_logo_white_72.png) |
| bcc-sandefjord    | [[svg]](https://design.bcc.no/logos/bcc-sandefjord_logo.svg)    | [[32]](https://design.bcc.no/logos/bcc-sandefjord_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-sandefjord_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-sandefjord_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-sandefjord_logo_dark-green_72.png)             | [[32]](https://design.bcc.no/logos/bcc-sandefjord_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-sandefjord_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-sandefjord_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-sandefjord_logo_white_72.png)             |
| bcc-stavanger     | [[svg]](https://design.bcc.no/logos/bcc-stavanger_logo.svg)     | [[32]](https://design.bcc.no/logos/bcc-stavanger_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-stavanger_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-stavanger_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-stavanger_logo_dark-green_72.png)                 | [[32]](https://design.bcc.no/logos/bcc-stavanger_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-stavanger_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-stavanger_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-stavanger_logo_white_72.png)                 |
| bcc-stord         | [[svg]](https://design.bcc.no/logos/bcc-stord_logo.svg)         | [[32]](https://design.bcc.no/logos/bcc-stord_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-stord_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-stord_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-stord_logo_dark-green_72.png)                                 | [[32]](https://design.bcc.no/logos/bcc-stord_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-stord_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-stord_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-stord_logo_white_72.png)                                 |
| bcc-sorlandet     | [[svg]](https://design.bcc.no/logos/bcc-sorlandet_logo.svg)     | [[32]](https://design.bcc.no/logos/bcc-sorlandet_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-sorlandet_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-sorlandet_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-sorlandet_logo_dark-green_72.png)                 | [[32]](https://design.bcc.no/logos/bcc-sorlandet_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-sorlandet_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-sorlandet_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-sorlandet_logo_white_72.png)                 |
| bcc-tonsberg      | [[svg]](https://design.bcc.no/logos/bcc-tonsberg_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-tonsberg_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-tonsberg_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-tonsberg_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-tonsberg_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-tonsberg_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-tonsberg_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-tonsberg_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-tonsberg_logo_white_72.png)                     |
| bcc-valdres       | [[svg]](https://design.bcc.no/logos/bcc-valdres_logo.svg)       | [[32]](https://design.bcc.no/logos/bcc-valdres_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-valdres_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-valdres_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-valdres_logo_dark-green_72.png)                         | [[32]](https://design.bcc.no/logos/bcc-valdres_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-valdres_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-valdres_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-valdres_logo_white_72.png)                         |
| bcc-ostfold       | [[svg]](https://design.bcc.no/logos/bcc-ostfold_logo.svg)       | [[32]](https://design.bcc.no/logos/bcc-ostfold_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-ostfold_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-ostfold_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-ostfold_logo_dark-green_72.png)                         | [[32]](https://design.bcc.no/logos/bcc-ostfold_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-ostfold_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-ostfold_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-ostfold_logo_white_72.png)                         |

<br>

| **Organisation** | **SVG**                                                      | **PNG - Dark green**                                                                                                                                                                                                                                                                                          | **PNG - White**                                                                                                                                                                                                                                                                           |
| :--------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bcc-media        | [[svg]](https://design.bcc.no/logos/bcc-media_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-media_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-media_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-media_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-media_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-media_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-media_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-media_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-media_logo_white_72.png)                     |
| bcc-event        | [[svg]](https://design.bcc.no/logos/bcc-event_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-event_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-event_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-event_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-event_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-event_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-event_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-event_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-event_logo_white_72.png)                     |
| bcc-a-team       | [[svg]](https://design.bcc.no/logos/bcc-a-team_logo.svg)     | [[32]](https://design.bcc.no/logos/bcc-a-team_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-a-team_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-a-team_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-a-team_logo_dark-green_72.png)                 | [[32]](https://design.bcc.no/logos/bcc-a-team_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-a-team_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-a-team_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-a-team_logo_white_72.png)                 |
| bcc-fund         | [[svg]](https://design.bcc.no/logos/bcc-fund_logo.svg)       | [[32]](https://design.bcc.no/logos/bcc-fund_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-fund_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-fund_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-fund_logo_dark-green_72.png)                         | [[32]](https://design.bcc.no/logos/bcc-fund_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-fund_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-fund_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-fund_logo_white_72.png)                         |
| bcc-music        | [[svg]](https://design.bcc.no/logos/bcc-music_logo.svg)      | [[32]](https://design.bcc.no/logos/bcc-music_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-music_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-music_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-music_logo_dark-green_72.png)                     | [[32]](https://design.bcc.no/logos/bcc-music_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-music_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-music_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-music_logo_white_72.png)                     |
| bcc-facilities   | [[svg]](https://design.bcc.no/logos/bcc-facilities_logo.svg) | [[32]](https://design.bcc.no/logos/bcc-facilities_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-facilities_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-facilities_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-facilities_logo_dark-green_72.png) | [[32]](https://design.bcc.no/logos/bcc-facilities_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-facilities_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-facilities_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-facilities_logo_white_72.png) |

<br>

| **Organisation** | **SVG**                                                 | **PNG - Dark green**                                                                                                                                                                                                                                                                      | **PNG - White**                                                                                                                                                                                                                                                       |
| :--------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bcc-norge        | [[svg]](https://design.bcc.no/logos/bcc-norge_logo.svg) | [[32]](https://design.bcc.no/logos/bcc-norge_logo_dark-green_32.png) - [[48]](https://design.bcc.no/logos/bcc-norge_logo_dark-green_48.png) - [[64]](https://design.bcc.no/logos/bcc-norge_logo_dark-green_64.png) - [[72]](https://design.bcc.no/logos/bcc-norge_logo_dark-green_72.png) | [[32]](https://design.bcc.no/logos/bcc-norge_logo_white_32.png) - [[48]](https://design.bcc.no/logos/bcc-norge_logo_white_48.png) - [[64]](https://design.bcc.no/logos/bcc-norge_logo_white_64.png) - [[72]](https://design.bcc.no/logos/bcc-norge_logo_white_72.png) |

## Links

[Github](https://github.com/bcc-code/bcc-design)

## License

[Apache License 2.0](https://github.com/bcc-code/bcc-design/blob/main/LICENSE.md)