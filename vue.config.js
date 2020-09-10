module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  outputDir: 'form',
  devServer: {
    proxy: {
      '/': {
        target: 'http://sas.yzzx.org',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
