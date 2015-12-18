var http = require('http');

var port = 3001;

function onRequest (req, res) {
	console.log('requete recu');
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write('welcome on nodeJS http serveur on port ' + port);
	res.end();
} 

http.createServer(onRequest).listen(port);
console.log('server running on :'+port);

