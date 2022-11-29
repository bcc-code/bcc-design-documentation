First of all if you want to setup the package you have to consider the difference between VuePress and VuePress v2.
Please read the correct documentation: https://v2.vuepress.vuejs.org/.

Secondly recognise which bundler do you use webpack or the vite's one. It may be imporant when you want to setup the package. You will find different examples for both inside the mentioned documentation (and on other pages).

## Implementing basic styles on VuePress v2

To start with you just have to follow the documentation:
https://v2.vuepress.vuejs.org/guide/getting-started.html#manual-installation
It will generate a simple site without any special stylings. It will apply the standard dark theme to the site.

To apply tailwind styles you have to add configuration (config.js file inside .vuepress folder) and apply the tailwind styles inside index.scss.
You will have to setup the tailwind for the project. It is advised to use the documentation: https://tailwindcss.com/
Do not forget that the tailwind config should be in the package not inside documentation.

In the configuration you may find following props:
registerComponentsPlugin: Important for components usage.
mdEnhancePlugin: Plugin for tabs in the documentation.
bundlerConfig: Configuration specific for vite bundler. In this documentation it contains tailwind specific styles configuration.

