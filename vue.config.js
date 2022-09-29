const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/theme/theme.less";`
      }
    }
  }
})