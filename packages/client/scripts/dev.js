const merge = require('webpack-merge'),
      webpack = require('webpack')

const base = require('./base.js')

module.exports = merge(base, {
  
    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './src',
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        proxy: [{
            context: ['/auth', '/api'],
            target: 'http://localhost:3001',
        }]
    }

})