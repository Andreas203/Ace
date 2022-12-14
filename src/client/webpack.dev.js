const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../../dist/client'),
        },
        hot: true,
    },
})
