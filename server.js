const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Final'));

app.get('*/' , function(req ,res) {
  res.sendFile(path.join(__dirname + '/dist/Final/index.html'));
});

app.listen(process.env.PORT || 8080);