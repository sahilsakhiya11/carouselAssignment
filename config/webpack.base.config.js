const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      excludeChunks: ['server'],
    }),
  ],
});