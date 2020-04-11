var webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const copyPlugin = require('copy-webpack-plugin')

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
		,new copyPlugin([{from: 'public', to: 'dist/public'}])
	]
}

module.exports= merge(common, clientConfig)
