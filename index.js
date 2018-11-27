const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = (api, projectOptions) => {
  const {
    sprite
  } = projectOptions.pluginOptions || {}
  const { enabled, ...options } = sprite

  if (enabled) return

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
    return {
      plugins: [
        new SpritesmithPlugin(options)
      ]
    }
  })

  api.registerCommand('sprite', {
    description: 'sprite',
    usage: 'vue-cli-service test',
    options: {}
  }, args => {
    console.log(projectOptions)
  })
}
