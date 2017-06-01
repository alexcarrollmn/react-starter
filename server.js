var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var express = require('express');

var chalk = require('chalk');
var router = express.Router();
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	proxy: {
		"/api": "http://localhost:3000"
	},
	stats: {
		colors: true
	}
});

var app = express();
app.use('/api', require('./api'));
app.use(router);

app.listen(3000,  function(){
	console.log(chalk.yellow.bgBlue("api proxy listening on ") + chalk.red.bgBlue.bold("http://localhost:3000") + "\n");
});

server.listen(8080, 'localhost', function() {
	console.log(chalk.yellow.bgBlue("webapp listening on ") + chalk.red.bgBlue.bold("http://localhost:8080") + "\n");
});