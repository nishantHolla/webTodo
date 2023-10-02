
const path = require('path');
const WebpackMerge = require('webpack-merge').merge;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config');
const productionConfig = {
	mode: "production",

	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "distribution"),
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new HtmlWebpackPlugin({
			template: "source/template.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // 3: move css to separate files
					"css-loader", // 2: take css and convert it to js
					"sass-loader" // 1: convert sass to css
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, // 2: move css to separate files
					"css-loader", // 1: take css and convert it to js
				]
			},
		]
	},

	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
	},
};

module.exports = WebpackMerge(commonConfig, productionConfig);
