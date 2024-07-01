const HtmlWebpackPlugin = require('html-webpack-plugin')

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack-common.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'main.js?[fullhash]'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    })
  ]
})