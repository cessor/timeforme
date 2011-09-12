var express = require('express');
var fs = require('fs');

var app = express.createServer();
app.set('views', __dirname + '/');

app.configure(function () {
	app.use(express.logger());
	app.use(express.staticProvider( __dirname + "/static"));
	app.use(express.errorHandler({
		dumpExceptions : true, 
		showStack : true
	}));
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade')

app.get('/', function(request, response) {
	response.render("root");
});

var port = process.env.PORT || 3000;
app.listen(port);