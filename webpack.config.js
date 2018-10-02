const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.min.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.min.css"
    }),
    new CopyWebpackPlugin([
      { from: 'src/view/' },
      { from: 'src/img/', to: 'img/' }
    ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000
  }
};