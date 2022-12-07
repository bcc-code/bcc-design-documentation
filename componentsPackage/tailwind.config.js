module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.{js,ts,vue,md}',
    './src/**/*.{js,ts,vue}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './node_modules/vuepress-theme-bcc-common-components/**/*.{js,ts,vue,md}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {},
}
