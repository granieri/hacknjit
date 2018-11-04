var express = require('express'); // Web Framework
const listpoop = require('./listpoop')
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});


app.get('/listpoop/:userid/', function (req, res) {
  var thing = JSON.stringify(listpoop.listpoop(req.params.userid))
  res.end(thing);
})
