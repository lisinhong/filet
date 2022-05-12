const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/filet/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/custom.scss";`,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      title: "Filet - Your Best Fixed Interest",
    },
  },
});
