import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'

const __dirname = getDirname(import.meta.url)

export const bccCustomTheme = (options) => {
  // returns a theme object
  return {
    name: 'vuepress-theme-bcc-custom-theme',

    // path to the client config of your theme
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    extends: defaultTheme({
      navbar: options.navbar,
      sidebar: options.sidebar,
    }),
    // set custom dev / build template
    // if the template is not specified, the default template from `@vuepress/client` will be used
    // templateBuild: path.resolve(__dirname, 'templates/build.html'),
    // templateDev: path.resolve(__dirname, 'templates/dev.html'),

    // use plugins
    plugins: [
      // mdEnhancePlugin({
      //   // adds code tabs support
      //   codetabs: true,
      // }),
    ],

    // other plugin APIs are also available
  }
}
