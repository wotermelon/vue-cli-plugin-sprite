const path = require('path')

// 雪碧图处理模板
const templateFunction = data => {
  const shared = '.icon { display:inline-block; background-image: url(I); background-size:WSMrem HSMrem; }'
    .replace('I', data.sprites[0].image)
    .replace('WSM', data.spritesheet.width / 100)
    .replace('HSM', data.spritesheet.height / 100)

  const perSprite = data.sprites.map(sprite => {
    return '.icon-N { width: Wrem; height: Hrem; background-position: Xrem Yrem; }'
      .replace('N', sprite.name)
      .replace('W', sprite.width / 100)
      .replace('H', sprite.height / 100)
      .replace('X', sprite.offset_x / 100)
      .replace('Y', sprite.offset_y / 100)
  }).join('\n')

  return shared + '\n' + perSprite
}

module.exports = {
  baseUrl: '',
  pluginOptions: {
    sprite: {
      src: {
        cwd: path.resolve(__dirname, './src/assets/img/sprite/'), // 图标根路径
        glob: '**/*.png' // 匹配任意 png 图标
      },
      target: {
        image: path.resolve(__dirname, './src/assets/img/sprite.png'), // 生成雪碧图目标路径与名称
        // 设置生成CSS背景及其定位的文件或方式
        css: [
          [path.resolve(__dirname, './src/assets/less/sprite.less'), {
            format: 'function_based_template'
          }]
        ]
      },
      customTemplates: {
        'function_based_template': templateFunction,
      },
      apiOptions: {
        cssImageRef: "../img/sprite.png", // css文件中引用雪碧图的相对位置路径配置
      },
      spritesmithOptions: {
        padding: 10,
      }
    }
  }
}
