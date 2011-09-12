var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var allowedTypes = {
	"css" : "text/css",
	"html" : "text/html"
};

app.configure(function() {
	
	app.use(express.logger());
	app.use(express.static("/"));
});

app.get('/', function(request, response) {
	response.send("Hello, World!");
});

var port = process.env.PORT || 3000;
app.listen(port);