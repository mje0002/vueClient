const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const commonConfig = {
	entry: './src/client/index.ts',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(vue|(j|t)sx?)$/,
				exclude: [
				  /node_modules/
				],
				use: [
					{
						loader: 'eslint-loader',
						options: {
							extensions: ['.vue','.ts','.tsx']
						}
					}
				]
			},
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
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
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
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					// disable type checker - we will use it in fork plugin
					transpileOnly: true,
					appendTsSuffixTo: [/\.vue$/]
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.runtime.esm-bundler.js'
		},
		plugins: [
			new TsconfigPathsPlugin(),
		],
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
		}),
		new ForkTsCheckerWebpackPlugin(
			{
			  typescript: {
				extensions: {
				  vue: {
					enabled: true,
					compiler: '@vue/compiler-sfc'
				  }
				},
				diagnosticOptions: {
				  semantic: true,
				  syntactic: false
				}
			  }
			}
		)
	]
}

module.exports = commonConfig
