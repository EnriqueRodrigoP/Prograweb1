var express = require('express');

var app = express();

app.listen(3001, function() {
    console.log('Servidor funcionando en http://localhost:3001');
  });

  app.get('/', function(req, res) {
    res.send('Hola mundo!! Express!!');
  });

  app.get('/bienvenido/:nombre', function(req, res) {
    res.send('Bienvenido!! ' + req.params.nombre + '!!');
  });