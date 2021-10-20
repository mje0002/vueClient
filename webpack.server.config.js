var path = require('path')
const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')

module.exports = {
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
            { 
				test: /\.tsx?$/, 
				loader: "ts-loader"
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
	],
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".js", ".json"],
		plugins: [
			new TsconfigPathsPlugin(),
		],
	}
}
