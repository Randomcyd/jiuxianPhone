module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.jiuxian.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
      },
      // '/api1': {
      //   target: 'https://mlogin.jiuxian.com',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/api1': ''
      //   },
      // },
    }
  },
  lintOnSave: false,
  chainWebpack:config=>{
    config.plugins.delete('prefetch');
  }
}
