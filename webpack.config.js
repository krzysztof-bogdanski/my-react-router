var debug = process.env.end !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      /*
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
      */
    ]
  },
  output: {
    path: __dirname + "/src",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};