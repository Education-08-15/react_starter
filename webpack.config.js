const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      // {
      //   test: /\.css$/,

      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.(s?css)$/i,

        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
};
