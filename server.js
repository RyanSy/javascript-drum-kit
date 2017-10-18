var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.png')));

app.get('/', function (req, res) {
  res.send(index);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});
