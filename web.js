var express = require('express');
var fs = require('fs');

var app = express.createServer();
app.set('views', __dirname + '/');

aap.configure(function () {
	app.use(express.logger());
	app.use(express.staticProvider( __dirname + "/"));
})

//app.get('/', function(request, response) {
//	response.render("index.jade");
//});

var port = process.env.PORT || 3000;
app.listen(port);