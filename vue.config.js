module.exports = {
  publicPath: '/mod/spams/static/',
  outputDir: 'dist',
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(4000000)
      .maxAssetSize(4000000)
  }
}
