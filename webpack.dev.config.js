var webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

const clientConfig = {
	mode: 'development',
	entry: './src/client/index.ts',
	devServer: {
		historyApiFallback: true,
		hot: true,
		watchOptions: {
		  poll: true
		}
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports= merge(common, clientConfig)
