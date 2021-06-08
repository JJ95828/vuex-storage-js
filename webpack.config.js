import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { resolve as _resolve } from 'path'
const isMin = !!~process.env.NODE_ENV.indexOf('min')
const type = process.env.NODE_ENV.replace(/:.*/g, '')
// const libraryTarget = type === 'iife' ? 'window' : type

const config = {
  mode: isMin ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: _resolve(__dirname, 'lib'),
    filename: `index.${type}${isMin ? '.min' : ''}.js`,
    library: 'createStorage',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
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
      },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.js', './test/*']
  }
}

export default config
