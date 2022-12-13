import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { bccCustomTheme } from 'vuepress-theme-bcc-common-components/config.js'
import glob from 'glob'

const __dirname = getDirname(import.meta.url)

const findAllItemChildren = (item, array, fullPath) => {
  if (item.split('/').length >= 2) {
    const firstItemName = item.split('/')[0]

    const foundElement = array.findIndex((item) => item && item.text === firstItemName)

    //Differentiate if item contains nested children
    if (item.split('/').length > 2 && item) {
      //Is not a first element in array and array is not empty
      if (array[foundElement]) {
        const itemWithoutFolderName = item.split('/').slice(1).join('/')
        return findAllItemChildren(itemWithoutFolderName, array[foundElement].children, fullPath)
      } else {
        // Elimanates empty folder (without md file) bug.
        array.push({
          text: item.split('/')[0],
          children: [],
        })
        const lastElement = array[array.length - 1]
        const splittedNames = item.split('/')
        splittedNames.shift()
        const joinedNames = splittedNames.join('/')
        return findAllItemChildren(joinedNames, lastElement.children, fullPath)
      }
    }

    // Create nested object first layer
    if (array && foundElement === -1) {
      const splittedNames = item.split('/')
      splittedNames.shift()
      const joinedNames = splittedNames.join('/')

      //If item name is index.md then add it to the parent folder
      const children = findAllItemChildren(joinedNames, array, fullPath)
      if (joinedNames === 'index.md') {
        return array.push({
          text: item.split('/')[0],
          link: `/${fullPath}`,
          children: children ? [children] : [],
        })
      }
      return array.push({
        text: item.split('/')[0],
        children: children ? [children] : [],
      })
    }

    //item contains string index.md
    if (item.includes('index.md')) {
      return (array[foundElement].link = `/${fullPath}`)
    }

    // Push item to its children
    return array[foundElement].children.push({
      text: path.basename(item, '.md'),
      link: `/${fullPath}`,
      activeMatch: `^/${path.basename(item, '.md')}`,
    })
  }

  if (!item || item.includes('index.md')) {
    return
  }

  //It is a children last element
  return {
    text: path.basename(item, '.md'),
    link: `/${fullPath}`,
    activeMatch: `^/${path.basename(item, '.md')}`,
  }
}

const findPathIcon = () => {
  const filesPaths = glob.sync(`${__dirname}/public/**/*.svg`)
  //Get path name from the docs folder
  var paths = filesPaths.map((file) => {
    return path.relative(`${__dirname}/public`, file)
  })

  return paths
}

export const getSideBarItems = () => {
  const filesPaths = glob.sync(`${__dirname}/../**/*.md`)
  //Get path name from the docs folder
  var paths = filesPaths.map((file) => {
    return path.relative(`${__dirname}/..`, file)
  })

  // Sort paths by '/' count
  paths.sort((a, b) => {
    return a.split('/').length - b.split('/').length
  })

  const sideBarItems = []

  console.log('PATHS', paths)
  paths.map((item) => {
    if (item.split('/').length >= 2) {
      findAllItemChildren(item, sideBarItems, item)
    } else {
      if (item !== 'README.md') {
        sideBarItems.push({
          text: path.basename(item, '.md'),
          link: `/${item}`,
          activeMatch: `^/${path.basename(item, '.md')}`,
        })
      }
    }
  })

  return sideBarItems.filter((item) => item)
}

export default defineUserConfig({
  lang: 'en-US',
  title: 'BCC Design',
  description: 'Package documentation',
  base: '/bcc-design/',
  clientConfigFile: path.resolve(__dirname, 'client.js'),
  theme: bccCustomTheme({
    logoDark: 'bccLogoWhite.png',
    logo: 'bccLogoDark.png',
    colorMode: 'dark',
    colorModeSwitch: true,
    icons: findPathIcon(),
    sidebar: getSideBarItems(),
    repo: 'bcc-code/bcc-design',
    // if your docs are in a different repo from your main project:
    docsRepo: 'bcc-code/bcc-design',
    // if your docs are not at the root of the repo:
    docsDir: 'componentsPackage/docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on github',
    prev: true,
    next: true,
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
