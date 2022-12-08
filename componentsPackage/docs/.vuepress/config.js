import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { bccCustomTheme } from 'vuepress-theme-bcc-common-components/config.js'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  title: 'BCC Design',
  description: 'Package documentation',
  base: '/bcc-design/',
  clientConfigFile: path.resolve(__dirname, 'client.js'),
  theme: bccCustomTheme({
    logo: 'bccLogo.png',
    navbar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Setup',
        link: '/Setup.md',
        activeMatch: '/Setup',
      },
    ],
    sidebar: [
      {
        text: 'Home',
        link: '/readme.md',
      },
      {
        text: 'Components',
        path: '../components',
        collapsible: false,
        children: [
          { text: 'Test', link: '/components/testFolder/test.md' },
          { text: 'Test 2', link: '/components/testTwo/testTwo.md' },
          { text: 'Badge', link: '/components/badge/badge.md' },
        ],
      },
      {
        text: 'Setup',
        link: '/Setup.md',
        activeMatch: '/Setup',
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../components'),
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
