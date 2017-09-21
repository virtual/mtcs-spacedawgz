var express = require('express');
var app = express(); // invoke express

// statements versus expressions for semi-colons

app.get('/', function(req, res) {
  res.send("<html><body style='background-image: url(https://i.imgur.com/pnNiUmh.jpg); background-size: cover; background-position: center;}'><div style='background: rgba(255,255,255,.6); padding: 10px; font-size: 2rem; margin: 0 auto; width: 800px; text-align:center;'>get ready <b>for</b> some doggy spacetime<br/><button style='background:#d00; color:#fff; padding: 5px 8px; font-size: 2rem;'>Launch</button></div></body></html>");
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