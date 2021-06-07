const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const isMin = !!~process.env.NODE_ENV.indexOf('min')
const type = process.env.NODE_ENV.replace(/:.*/g, '')
const libraryTarget = type === 'iife' ? 'window' : type

const config = {
  mode: isMin ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `index.${type}${isMin ? '.min' : ''}.js`,
    library: 'createStorage',
    libraryTarget
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        // test 指定生效的文件
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: '58',
                      ie: '11'
                    },
                    corejs: '3',
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.js', './test/*']
  }
}

module.exports = config
