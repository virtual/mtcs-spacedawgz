var express = require('express'),
  path = require('path'),
  app = express(); // invoke express

// statements versus expressions for semi-colons

app.get('/', function(req, res) {
  // res.sendfile("./templates/dawgz.html"); // without path, deprecated
  res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/launch', function(req, res) {
  // !! - redo last terminal command
  res.send("activate dawg launch");
});

app.get('/rainbow', function(req, res) {
  res.send("warp some rainbows");
});


var port = 5000;
app.listen(port, function(){
  // this is called when the app starts LISTENING not when it hears
  console.log('listening on port', port);
});