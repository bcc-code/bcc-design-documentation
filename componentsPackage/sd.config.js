const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: 'all',
    source: ['../tokens/colors.json'],
    buildPath: './',
    tailwind: {
      plugin: [require('flowbite/plugin')],
      content: ['./docs/**/*.{js,ts,vue,md}', './src/**/*.{js,ts,vue}', './node_modules/flowbite/**/*.js', './node_modules/vuepress-theme-bcc-common-components/**/*.{js,ts,vue,md}'],
    },
  })
)

StyleDictionary.buildAllPlatforms()
