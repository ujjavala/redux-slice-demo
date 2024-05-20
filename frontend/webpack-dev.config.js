/* eslint-disable indent */

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack-common.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: { static: './' },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ]
})
