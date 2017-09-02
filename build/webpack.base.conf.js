'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		index:[
			path.resolve(__dirname,'../src/main.js')
		]
	},
	output:{
		path:path.resolve(__dirname,'../dis/static'),
		filename:'[name].[hash:8].js',
		publicPath:'static/'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
			},
			{
				test:/\.js$/,
				loader:'babel-loader?preset=es2015',
				exclude:/node_modules/
			}
		]
	},
	resolve:{
		extensions:['.js','.vue'],
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	plugin:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,'../index.html')
		})
	]
}
