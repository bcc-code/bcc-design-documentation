import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

export default defineClientConfig({
  setup() {
    onMounted(() => {
      var scripts = ['https://unpkg.com/flowbite@1.5.4/dist/flowbite.js']
      scripts.forEach((script) => {
        let tag = document.createElement('script')
        tag.setAttribute('src', script)
        document.head.appendChild(tag)
      })
    })
  },
})
