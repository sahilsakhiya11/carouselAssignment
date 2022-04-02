const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const devConfig = () => ({
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeChunks: ["server"],
    }),
  ],
});

module.exports = () => merge(baseConfig(), devConfig());