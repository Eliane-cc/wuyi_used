module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  },
  devServer: {
    proxy: {
      '/cosumer': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '/cosumer': ''
        }
      }
    }
  }
}