import * as currentPath from './mockedReadmeFolders/navigationFolderPoint/navigationPoint.cjs'
import { getSideBarItems } from './getSidebarItems'

test('Should generate the correct sidebar structure', () => {
  expect(getSideBarItems(currentPath.default)).toStrictEqual([
    // Simple site check
    {
      activeMatch: '^/test',
      link: '/test.md',
      text: 'test',
    },
    // Simple folder check
    {
      children: [
        {
          activeMatch: '^/FolderFile',
          link: '/FolderName/FolderFile.md',
          text: 'FolderFile',
        },
      ],
      text: 'FolderName',
    },
    // Index file check (Should not generate children. It should be itself a page)
    {
      children: [],
      link: '/IndexFolder/index.md',
      text: 'IndexFolder',
    },
    // Nested with 3 layers of sidebar nesting asdasd s da sa asdsa
    {
      children: [
        {
          activeMatch: '^/First',
          link: '/NestedWithLayers/First.md',
          text: 'First',
        },
        {
          children: [
            {
              activeMatch: '^/Second',
              link: '/NestedWithLayers/FirstFolder/Second.md',
              text: 'Second',
            },
            {
              children: [
                {
                  activeMatch: '^/Third',
                  link: '/NestedWithLayers/FirstFolder/SecondFolder/Third.md',
                  text: 'Third',
                },
              ],
              text: 'SecondFolder',
            },
          ],
          text: 'FirstFolder',
        },
      ],
      text: 'NestedWithLayers',
    },
    // Nested without first layer md file ( only folder )
    {
      children: [
        {
          children: [
            {
              activeMatch: '^/HereIs',
              link: '/NestedNoFirstLayer/TestLayer/HereIs.md',
              text: 'HereIs',
            },
          ],
          text: 'TestLayer',
        },
      ],
      text: 'NestedNoFirstLayer',
    },
  ])
})
