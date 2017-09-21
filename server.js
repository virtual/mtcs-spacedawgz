var express = require('express');
var app = express(); // invoke express

var port = 5000;
app.listen(port, function(){
  // this is called when the app starts LISTENING not when it hears
  console.log('listening on port', port);
});