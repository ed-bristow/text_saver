var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('website.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(80);

// cd C:\Users\Edward\Documents\Programming\Notepad++ Files\text saving website\
// node webnode.js