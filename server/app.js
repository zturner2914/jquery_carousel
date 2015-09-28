var express = require('express');
var data = require('./public/assets/data/classmate');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});


app.get('/getData', function(req, res){
    res.send(data);
});

var server = app.listen(process.env.PORT, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;