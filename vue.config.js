const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: {
      filename: "assets/css/[name].css",
    },
  },
  configureWebpack: (config) => {
    config.output.filename = "assets/js/[name].js";
    config.output.chunkFilename = "assets/js/[name].js";
  },
});
