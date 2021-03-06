var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')

const commonConfig = {
	entry: './src/client/index.ts',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
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
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	performance: {
		hints: false
	},
	plugins: [
		new TSLintPlugin({
            files: ['./src/client/**/*.ts']
		}),
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
