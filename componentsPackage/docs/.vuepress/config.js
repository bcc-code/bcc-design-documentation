import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { createPage } from '@vuepress/core'
import { bccCustomTheme } from 'vuepress-theme-bcc-common-components/config.js'
// import { fooTheme } from './config2'

const __dirname = getDirname(import.meta.url)

// const fooTheme = (options) => {
//   // returns a theme object
//   return {
//     name: 'vuepress-theme-foo',

//     // path to the client config of your theme
//     clientConfigFile: path.resolve(__dirname, 'client.js'),

//     // set custom dev / build template
//     // if the template is not specified, the default template from `@vuepress/client` will be used
//     // templateBuild: path.resolve(__dirname, 'templates/build.html'),
//     // templateDev: path.resolve(__dirname, 'templates/dev.html'),

//     // use plugins
//     plugins: [
//       // ...
//     ],

//     // other plugin APIs are also available
//   }
// }

export default defineUserConfig({
  lang: 'en-US',
  title: 'BCC Design',
  description: 'Package documentation',
  base: '/bcc-design/',
  theme: bccCustomTheme({
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
  async onInitialized(app) {
    // if the homepage does not exist
    if (app.pages.every((page) => page.path !== '/')) {
      // create a homepage
      const homepage = await createPage(app, {
        path: '/',
        // set frontmatter
        frontmatter: {
          layout: 'Layout',
        },
        // set markdown content
        content: `\
# Welcome to ${app.options.title}

This is the default homepage
`,
      })
      // add it to `app.pages`
      app.pages.push(homepage)
    }
  },
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
