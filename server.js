
var fs = require('fs');
var http = require('http');

httpServer = http.createServer(function (req, res) {

var stream = fs.createReadStream("C:/Users/simon/Project/detectOS.html"); 



        // Handle non-existent file
        stream.on('error', function(error) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            res.end();
        });

        // File exists, stream it to user
        res.statusCode = 200;
        stream.pipe(res);



  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World!');
});


httpServer.listen(8080);
