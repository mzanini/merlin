const path = require('path');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname + "/../app",
  entry: {
    background: "./background.js",
    app: "./app.js",
    roll: "./roll.js",
    tablesSelect: './tables-select.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
		filename: "[name].js"
  },
  target: "electron-main",
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader'] }
    ]
  }
};
