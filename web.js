var jade = require('jade');
var express = require('express');
var fs = require('fs');

var app = express.createServer();

app.configure(function () {
	app.use(express.logger());
	app.use(express.static( __dirname + "/static"));
	app.use(express.errorHandler({
		dumpExceptions : true, 
		showStack : true
	}));
});

app.get('/', function(request, response) {
	// default mapping to server static files
});

var port = process.env.PORT || 3000;
app.listen(port);