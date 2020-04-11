var path = require('path')
var webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const serverConfig = require('./webpack.server.config')

const clientConfig = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './',
		filename: 'build.js'
	},
	devtool: '#source-map',
	optimization: {
		minimize: true
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]
}

module.exports=[merge(common, clientConfig), serverConfig]