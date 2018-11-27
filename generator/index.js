module.exports = (api, option, rootOptions) => {
  if (!option.addSprite) return

  api.extendPackage({
    devDependencies: {
      'webpack-spritesmith': '^0.5.4'
    },
    scripts: {
      "sprite": "vue-cli-service sprite"
    }
  })
}
