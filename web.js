var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var allowedTypes = {
	"css" : "text/css",
	"html" : "text/html"
};

app.get('/', function(request, response) {
	sendFile("index.html", response, "text/html");
});

app.get(/^([\w\/]+.css)$/, function(request, response) {
	sendFile(request.params[0], response, "text/css");
}); 

var sendFile = function(filename, response, contentType) {
	fs.readFile(filename,function(err, data) {  
            if(err) {  
				response.send("Apologies, dumb programmer exception. ", {'Content-Type' : "text/html"}, 500);  
                return;  
            }  
            response.send(data, {'Content-Type' : contentType}, 200);  
        }); 
};

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});