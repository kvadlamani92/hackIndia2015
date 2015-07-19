var directions = {
	0: 'left',
	1: 'right',
	2: 'up',
	3: 'down'
};

var dict = {
    'RESPONSE_READY':'0'
  };

function updateGestureState(dir) {
 var req = new XMLHttpRequest();
 //console.log("http://172.20.10.6/pebble/" + directions[dir]);
 //req.open('GET', 'http://172.20.10.6/pebble/' + directions[dir], true);
 //req.open('GET', 'http://192.168.0.112/pebble/' + directions[dir], true);
 req.open('GET', 'http://hackindgesture.herokuapp.com/pebble/' + directions[dir], true);
 req.send(null); 
  Pebble.sendAppMessage(dict, function(e) {
      console.log('App Send successful.');
    },
    function(e) {
      console.log('App Send failed!');
    }
}


Pebble.addEventListener('ready', function (e) {
  
});

Pebble.addEventListener('appmessage', function (e) {
  updateGestureState(e.payload["0"]);
});

Pebble.addEventListener('webviewclosed', function (e) {
  });
