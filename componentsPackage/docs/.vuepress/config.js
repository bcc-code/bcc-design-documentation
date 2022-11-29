import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { createPage } from '@vuepress/core'
import { hopeTheme } from 'vuepress-theme-hope'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  title: 'BCC Design',
  description: 'Package documentation',
  base: '/bcc-design/',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '../README.md',
      },
      {
        text: 'Setup',
        link: '../Setup.md',
      },
    ],
    sidebar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Components',
        path: '../components',
        collapsible: false,
        children: [
          { text: 'Test', link: '/components/testFolder/test.md' },
          { text: 'Badge', link: '/components/badge/badge.md' },
        ],
      },
      {
        text: 'Setup',
        link: '/Setup.md',
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
