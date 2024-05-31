const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js",
    },
  },
  publicPath: "",
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "QUM SDLC",
    },
  },
})
