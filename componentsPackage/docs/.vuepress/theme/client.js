import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import { onMounted } from 'vue'

export default defineClientConfig({
  layouts: {
    Layout,
  },
  async enhance() {
    if (!__VUEPRESS_SSR__) {
      await import('flowbite')
    }
  },
  setup() {
    onMounted(() => {
      // use DOM API after mounted
      import('flowbite')
    })
  }
})
