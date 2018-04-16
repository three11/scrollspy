const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'index.min.js',
		library: 'InfiniteScroll',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [new UnminifiedWebpackPlugin()]
};
