var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
	entry: './src/client/index.ts',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [{
				  loader: "style-loader"
				}, {
				  loader: "css-loader"
				}, {
				  loader: "sass-loader"
				}]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
		alias: {
			'vue': '@vue/runtime-dom'
		}
	},
	performance: {
		hints: false
	},
	plugins: [
		// make sure to include the plugin for the magic
		new VueLoaderPlugin(),
		//HtmlWebpackPlugin will generate the index.html file
		new HtmlWebpackPlugin({
			favicon: 'public/favicon.ico',
			template: 'src/client/index.ejs',
			title: 'Node Vue App',
			libraryTarget: 'window'
		})
	]
}

module.exports = commonConfig
