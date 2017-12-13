var http = require('http');
var fs = require("fs"); 

http.createServer(function(request, response) {
    fs.readFile("index.html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      });
    }).listen(process.env.PORT || 3000);

