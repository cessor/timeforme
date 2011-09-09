var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var filename = "hello.txt";
	
	fs.readFile(filename,function(err, data) {  
            if(err) {  
                return;  
            }  
  
            response.send(data, {'Content-Type' : "text/html"}, 200);  
        });  
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});