var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	sendFile("index.html", response, "text/html");
});

app.get('/960/:file', function(request, response) {
	sendFile('960/' + request.params.file, response, "text/css");
});

app.get(/^([\w\/]+.css)$/, function(request, response) {
	response.send(request.params);
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