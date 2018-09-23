const path = require('path')

var debug = process.env.NODE_ENV !== 'production'

module.exports = {
  context: path.join(__dirname, '/../app'),
  entry: {
    background: './background.js',
    app: './Application.js',
    tablesSelect: './tables-select.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  target: 'electron-main',
  devtool: debug ? 'inline-sourcemap' : null,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader'] }
    ]
  }
}
