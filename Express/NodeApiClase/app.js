'use strict';

//
// app.js
//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", function(req, res) {
    let data = {
        message: 'Hello World!'
    };
    res.status(200).send(data);
});

app.post("/api", function(req, res) {
    console.log(req.body);
    let data = {
         response: 'You sent: ' + req.body.message
    };

    // Do something, like query a database or save data

    res.status(200).send(data);
});

module.exports = app;