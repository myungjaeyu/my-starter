const path = require('path'),
      webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

    entry: {
        app: path.join(__dirname, '../src/index')
    },

    output: {
        path: path.join(__dirname, '../../../dist'),
        filename: devMode ? 'bundle.js' : '[name].[chunkhash:8].js',
        chunkFilename: devMode ? '[name].bundle.js' : '[id].chunk.[chunkhash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                include: path.join(__dirname, '../src/'),
                use: [
                    'babel-loader',
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            cacheDirectory: true 
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                include: path.join(__dirname, '../src/'),
                use: [
                    {
                        loader: 'source-map-loader',
                        options: { cacheDirectory: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [ autoprefixer() ] },
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [ autoprefixer() ] },
                    }          
                ],
                },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?[tv]=[\d.]+)*$/,
                exclude: /node_modules/,
                use: [
                    'file-loader?name=assets/images/[name].[ext]',
                ],
            },      
            {
                test: /\.(svg|woff|woff2|ttf|eot|otf)(\?[tv]=[\d.]+)*$/,
                exclude: /node_modules/,
                use: ['file-loader?name=assets/fonts/[name].[ext]'],
            }
        ],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false, options: {} }),

        new HtmlWebpackPlugin({
            title: 'Service',
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html'),
            favicon: path.join(__dirname, '../src/assets/images/favicon.ico')
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css',
        })

    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@components': path.join(__dirname, '../src/components'),
            '@containers': path.join(__dirname, '../src/containers'),
            '@pages': path.join(__dirname, '../src/pages'),
            '@commons': path.join(__dirname, '../src/commons'),
            '@services': path.join(__dirname, '../src/services'),
            '@models': path.join(__dirname, '../src/models'),
            '@assets': path.join(__dirname, '../src/assets'),
            '@hooks': path.join(__dirname, '../src/hooks')
        }
    }

}