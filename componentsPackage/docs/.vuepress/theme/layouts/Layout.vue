<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Sidebar from '../components/Sidebar.vue'
import { useThemeData } from '@vuepress/plugin-theme-data/client'
import { toRaw } from 'vue'

const themeData = useThemeData()
const rawObjectOrArray = toRaw(themeData.value.sidebar)
const icons = toRaw(themeData.value.icons)
console.log(rawObjectOrArray)
console.log(icons)
</script>
<template>
  <ParentLayout>
    <template #sidebar>
      <ClientOnly>  
        <Sidebar :routes="rawObjectOrArray" :pathIcons="icons" />
      </ClientOnly>
    </template>
  </ParentLayout>
</template>

<style lang="stylus">
@import '../styles/theme.styl';
@import '../styles/custom.styl';
</style>

<style>
@import '../styles/index.scss';
</style>
