import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    mdEnhancePlugin({
      // adds code tabs support
      codetabs: true,
    }),
  ],
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    },
  },
})
