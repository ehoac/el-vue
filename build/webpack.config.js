const Path = require('path')
const Webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

function resolveResource(name){
  return Path.resolve(__dirname, '../src/assets/style/' + name)
}

let config = {
  target: "web",
  entry: Path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'vender.build.js',
    path: Path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            }
          }
        }
      ]
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: 'vue-html-loader'
    }, {
      test: /\.css$/,
      use: [
        { loader: 'vue-style-loader' },
        { loader: 'css-loader', options: { sourceMap: true } },
      ]
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'vue-style-loader' },
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } },
        { loader: 'sass-resources-loader',
          options: {
            sourceMap: true,
            resources: [
              resolveResource('main.scss'),
              resolveResource('mixins.scss'),
              resolveResource('variable.scss')
            ]
          }
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'imgs/[name].[ext]'
        }
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: false
    }),
    new Webpack.DefinePlugin({
      'process-env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
  ],
  resolve: {
    alias: {
      '@': Path.join(__dirname, '../src/')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node']
  },
}

if (isDev) {
  config.devServer = {
    port: 20001,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true,
    hotOnly: true
  }
  config.plugins.push(new Webpack.HotModuleReplacementPlugin())
}

module.exports = config
