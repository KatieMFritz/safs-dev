var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var CompressionWebpackPlugin = require('compression-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

var utils = {
  assetsPath: function (_path) {
    return resolve(_path)
  },

  cssLoaders: function (options) {
    options = options || {}

    var cssLoader = {
      loader: 'css-loader',
      options: {
        minimize: process.env.NODE_ENV === 'production',
        sourceMap: options.sourceMap
      }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
      var loaders = [cssLoader]
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }

      // Extract CSS when that option is specified
      // (which is the case during production build)
      if (options.extract) {
        return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader'
        })
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
      css: generateLoaders(),
      scss: generateLoaders('sass'),
    }
  },

  // Generate loaders for standalone style files (outside of .vue)
  styleLoaders: function (options) {
    var output = []
    var loaders = utils.cssLoaders(options)
    for (var extension in loaders) {
      var loader = loaders[extension]
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }
    return output
  }
}

var webpackConfig = {
  entry: {
    app: './frontend/app.js'
  },
  output: {
    path: resolve('web/compiled'),
    filename: 'js/[name].js',
    publicPath: '/compiled/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('frontend'),
    },
    extensions: ['.js', '.vue', '.json'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('frontend')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: true,
            extract: process.env.NODE_ENV === 'production'
          }),
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('frontend')]
      },
      // Images
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      // Audio/Video
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + (process.env.NODE_ENV || 'development') + '"'
      }
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig = merge(webpackConfig, {
    module: {
      rules: utils.styleLoaders({
        sourceMap: true,
        extract: true
      })
    },
    devtool: '#source-map',
    // output: {
    //   filename: 'js/[name].[chunkhash].js',
    //   chunkFilename: 'js/[id].[chunkhash].js
    // },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      }),

      // extract css into its own file
      new ExtractTextPlugin({
        filename: utils.assetsPath('css/[name].[contenthash].css')
      }),

      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),

      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(js|css|png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$'
        ),
        threshold: 10240,
        minRatio: 0.8
      }),

      new BundleAnalyzerPlugin()
    ]
  })
} else {
  webpackConfig = merge(webpackConfig, {
    output: {
      publicPath: 'http://localhost:8080/compiled/'
    },
    module: {
      rules: utils.styleLoaders({ sourceMap: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    devServer: {
      hot: true,
      quiet: true,
      clientLogLevel: 'none',
      stats: 'errors-only',
      contentBase: resolve('web'),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin()
    ]
  })
}

module.exports = webpackConfig
