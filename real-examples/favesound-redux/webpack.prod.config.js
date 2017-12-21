var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let options = {
    warnings: true,
    mangle: {
      toplevel: true
    },
    compress: {
      drop_console: true
    }
  };

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['thread-loader', 'cache-loader', 'babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['thread-loader', 'cache-loader', 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new UglifyJsPlugin({
      parallel : 8,
      cache: true,
      uglifyOptions: options
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
