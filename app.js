var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/yo", function (req, res) {
    res.send("YO!");
});

var server = app.listen(3000, function () {
    console.log("Listen on port ", server.address().port);
});
