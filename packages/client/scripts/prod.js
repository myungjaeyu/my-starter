const path = require('path'),
      merge = require('webpack-merge'),
      webpack = require('webpack'),
      TerserPlugin = require('terser-webpack-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const base = require('./base.js')

module.exports = merge(base, {

    mode: 'production',

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]

})