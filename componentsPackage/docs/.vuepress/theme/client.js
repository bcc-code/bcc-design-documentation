import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import { onMounted } from 'vue'

export default defineClientConfig({
  layouts: {
    Layout,
  },
})
