const merge = require("webpack-merge");
const path = require('path');
const base = require("./webpack.config");

const buildDirectory = '../dist/';

module.exports = merge(base, {
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:7700/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
});