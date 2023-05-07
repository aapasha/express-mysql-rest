"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var app = express();

var db = mysql.createConnection({
    user: 'root',
    password: 'root123',
    host: '127.0.0.1',
    database: 'dailyquote',
});

app.get('/select', function (req, res) {
    db.query('SELECT * FROM quotes', function (err, result) {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.post('/insert', function (req, res) {
    var quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo risus quis imperdiet mattis. Morbi semper ante eu maximus accumsan. Sed at tellus facilisis, tempus sapien ut, vehicula sapien.';
    var author = 'some guy';
    db.query('INSERT INTO quotes (quote, author) VALUES (?, ?)', [quote, author], function (err, result) {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
app.listen(3001, function () {
    console.log('server running');
});
