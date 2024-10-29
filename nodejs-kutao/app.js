const http = require('http');
const os = require('os');

console.log("kutao server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit [" + os.hostname() + "] , nodejs app V2.0 \n");
};

var www = http.createServer(handler);
www.listen(80);
