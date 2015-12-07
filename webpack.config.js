var path = require('path'),

    ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),

    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('main.css')
  ],
  devtool: 'source-map',
  entry: SRC_PATH,
  output: {
    path: DIST_PATH, // webpack 打包文件的路径
    publicPath: '/assets/', // webpack-dev-server 发布静态资源的路径，请看 index.html
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.vue', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime'],
        }
      },
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css")
    }
  }
}
