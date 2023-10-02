
const path = require('path');

module.exports = {
	entry: "./source/main.js",

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},

			{
				test: /\.(svg|png|jpg|jpge|webp|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name].[contenthash].[ext]'
				}
			},
			
			{
				test: /\.(mp4)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/videos/[name].[contenthash].[ext]'
				}
			},
			
			{
				test: /\.(mp3)/,
				type: 'assets/resource',
				generator: {
					filename: 'assets/audios/[name].[contenthash].[ext]'
				}
			}
		]
	}
};
