var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
	res.render("index.html");
});

var port = process.env.PORT || 3000;
app.listen(port);