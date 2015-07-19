var http = require('http');
/*var req=require('request');*/
var data = {};
http.createServer(function (req, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });

    var x = new Date().getTime().toString();

    if(req.url.indexOf('pebble') > -1) {
    	data[x.substring(0, x.length-3)] = req.url.replace('/pebble/', '')
    	console.log(data)
    	response.end();
	}
	if(req.url.indexOf('webApp') > -1) {
		console.log(x + (data[x.substring(0, x.length-3)] || 'N/A'));
		response.end(data[x.substring(0, x.length-3)] || 'N/A');
		data = {};
	}
}).listen(1337);