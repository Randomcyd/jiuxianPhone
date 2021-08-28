module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.jiuxian.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  chainWebpack:config=>{
    config.plugins.delete('prefetch');
  }
}
