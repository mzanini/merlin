const path = require('path');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname + "/../app",
  entry: {
    background: "./background.js",
    rollDice: "./roll-dice.js",
    rollCharacter: "./roll-character.js",
    tablesSelect: './tables-select.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
		filename: "[name].js"
  },
  target: "electron",
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  }
};
