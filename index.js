var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'mestimator://authenticate'});
  res.end();
}).listen(80);
