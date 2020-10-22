const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/host/index.ts',
    button: './src/button/index.ts',
    checkout: './src/checkout/index.tsx',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/host/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'button',
      template: 'src/button/index.html',
      chunks: ['button'],
    }),
    new HtmlWebpackPlugin({
      filename: 'checkout',
      template: 'src/checkout/index.html',
      chunks: ['checkout'],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
