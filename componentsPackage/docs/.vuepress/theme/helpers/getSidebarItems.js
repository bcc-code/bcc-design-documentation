import { path } from '@vuepress/utils'
import glob from 'glob'

export const findAllItemChildren = (item, array, fullPath) => {
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

export const getSideBarItems = (__dirname) => {
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
