var express = require('express');
var app = express();
var data = {};
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

function allowOrigin (req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
}
app.use(allowOrigin);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/pebble/left', function(request,response) {
  
  var x = new Date().getTime().toString();
  data[x.substring(0, x.length-3)] = 'left';
  console.log(data);
  response.end();
});

app.get('/pebble/right', function(request,response) {
  
  var x = new Date().getTime().toString();
  data[x.substring(0, x.length-3)] = 'right';
  console.log(data);
  response.end();
});

app.get('/pebble/up', function(request,response) {
  
  var x = new Date().getTime().toString();
  data[x.substring(0, x.length-3)] = 'up';
  console.log(data);
  response.end();
});

app.get('/pebble/down', function(request,response) {
  
  var x = new Date().getTime().toString();
  data[x.substring(0, x.length-3)] = 'down';
  console.log(data);
  response.end();
});

app.get('/webapp', function(request,response) {
  var x = new Date().getTime().toString();
		console.log(x + (data[x.substring(0, x.length-6)] || 'N/A'));
		response.end(data[x.substring(0, x.length-6)] || 'N/A');
		data = {};
  
});
