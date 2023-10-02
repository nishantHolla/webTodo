
const path = require('path');
const WebpackMerge = require('webpack-merge').merge;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.config');
const developmentConfig = {
	mode: "development",

	plugins: [
		new HtmlWebpackPlugin({
			template: "source/template.html"
		})
	],

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "distribution")
	},

	devServer: {
		open: true,
		watchFiles: ['source/**/*'],
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // 3: inject converted js to DOM
					"css-loader", // 2: take css and convert it to js
					"sass-loader" // 1: convert sass to css
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	}
};

module.exports = WebpackMerge(commonConfig, developmentConfig);
