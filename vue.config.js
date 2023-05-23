const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/saas-status',
  transpileDependencies: [
    'vuetify'
  ]
})
