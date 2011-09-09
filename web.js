var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var filename = "hello.txt";
	
	fs.readFile(filename,function(err, data) {  
            if(err) {  
                response.sendHeader(500, {"Content-Type": "text/plain"});  
                response.write(err + "\n");  
                response.close();  
                return;  
            }  
  
            response.sendHeader(200);  
            response.write(data, "text/html");  
            response.close();  
        });  
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});