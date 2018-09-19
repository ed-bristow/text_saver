var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('website.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
});

var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
    console.log('Client connected!');
});

server.listen(80);

// cd C:\Users\Edward\Documents\Programming\Notepad++ Files\text saving website\
// node webnode.js
