const path = require("");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ".src/index.js",
  output: {
    path: path.join(--dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
