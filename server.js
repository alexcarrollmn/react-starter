var WebpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require ('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var express = require('express');
var request = require('request');
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

var app=express();
app.all('/api/:path', function (req, res) {
     request.get('https://oddt.cognostm1.ibmcloud.com/oddt/v1/' + req.params.path)
            .pipe(res);
 });
app.use(router);

app.listen(3000,  function(){
  console.log(chalk.yellow.bgBlue("api proxy listening on ") + chalk.red.bgBlue.bold("http://localhost:3000") + "\n");
});

server.listen(8080, 'localhost', function() {
  console.log(chalk.yellow.bgBlue("webapp listening on ") + chalk.red.bgBlue.bold("http://localhost:8080") + "\n");
});