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