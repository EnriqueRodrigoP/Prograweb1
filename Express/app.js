// copy this into your app.js
const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get("/hola", function(req, res, next) {
    res.render('index', { title: 'Estás en el index!' });
});

module.exports = app;