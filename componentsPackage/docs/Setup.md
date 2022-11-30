# Setup

First of all if you want to setup the package you have to consider the difference between VuePress and VuePress v2.
Please read the correct documentation: https://v2.vuepress.vuejs.org/.

Secondly recognise which bundler do you use webpack or the vite's one. It may be imporant when you want to setup the package. You will find different examples for both inside the mentioned documentation (and on other pages).

## Implementing basic styles on VuePress v2

To start with you just have to follow the documentation:
[VuePress documentation](https://v2.vuepress.vuejs.org/guide/getting-started.html#manual-installation)

In short: Install vuePress, create docs and readme.md inside with some text, add starting documentation commands to package.json.
When you start it should show a simple documentation page. It applies the standard dark theme to the site.

To apply tailwind styles you have to add configuration (config.js file inside .vuepress folder) and apply the tailwind styles inside index.scss.
You will have to setup the tailwind for the project. It is advised to use the documentation: [Tailwind documentation](https://tailwindcss.com/)

Do not forget that the tailwind config should be in the package not inside documentation.

In the configuration you may find following props:
registerComponentsPlugin: Important for components usage.
mdEnhancePlugin: Plugin for tabs in the documentation.
bundlerConfig: Configuration specific for vite bundler. In this documentation it contains tailwind specific styles configuration.

## CI/CD Workflow

There is one CI/CD: update-package-and-documentation containing the flow for building and deploying files.
The second part of the CI/CD (docs) updates the documentation for the page.
It is built on the github-pages branch so additional configuration for the github pages on the github is needed:
In github settings => pages, you should set the pages to "deploy from the branch". Use /root as there is no docs folder.
After the page is build from CI/CD, default Github Action is triggered and the page is deployed.
Every change should be already inside the updated documentation. To see the changes refresh the page, because you may see the cached version of the documentation.

## Adding new pages

To add a new page you have to understand the routing system in VuePress: [Routing](https://v2.vuepress.vuejs.org/guide/page.html)
If you add a new page, you have to register it in the configuration, so it will appear on the left menu.
You can access a page without configuring it by entering the url manually.