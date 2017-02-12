var debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname + "/app",
  entry: {
    rollDice: "./roll-dice.js",
    rollCharacter: "./roll-character.js",
    tablesSelect: './tables-select.js'
  },
  output: {
    path: "./app/dist",
		filename: "[name].js"
  },
  target: "electron",
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
