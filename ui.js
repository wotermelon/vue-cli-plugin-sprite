module.exports = api => {
  console.log(api)

  api.describeConfig({
    id: 'sprite.image',
    name: 'Sprite',
    description: 'vue-cli 3 plugin to build a sprite img',
    link: 'https://github.com/wotermelon/vue-cli-plugin-sprite',
    files: {
      vue: {
        js: ['vue.config.js']
      }
    }
  })
}
