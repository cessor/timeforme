var express = require('express');
var fs = require('fs');

var app = express.createServer();
app.set('views', __dirname + '/');

app.configure(function () {
	app.use(express.logger());
	app.use(express.static( __dirname + "/static"));
	app.use(express.errorHandler({
		dumpExceptions : true, 
		showStack : true
	}));
});

app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
	response.render("root.jade");
});

var port = process.env.PORT || 3000;
app.listen(port);