var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')

const clientConfig = {
	mode: 'development',
	entry: './src/client/index.ts',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './',
		filename: 'build.js'
	},
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
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
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
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map',
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

const serverConfig = {
	cache: true,
	context: __dirname,
	mode: 'development',
	target: 'node',
	devtool: 'source-map',
	entry: {
		server: './src/server/server.ts'
	},
	module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
				test: /\.tsx?$/, 
				loader: "awesome-typescript-loader", 
				options:{ configFileName: 'tsconfig.json'} 
			},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname + '/dist'),
		publicPath: '/'  //Hot reloading won’t work as expected for nested routes without it
	},
	plugins: [
		new TSLintPlugin({
            files: ['./src/**/*.ts']
		})
	],
	resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: [".ts", ".js", ".json"]
	}
}

module.exports=[clientConfig, serverConfig]

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}