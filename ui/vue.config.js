const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: `http://${process.env.API_HOST || '0.0.0.0'}:${process.env.API_PORT || 4000}`
      }
    }
  }
});
