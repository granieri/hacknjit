var express = require('express'); // Web Framework
const listpoop = require('./listpoop')
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});


app.get('/listpoop/:userid/', function (req, res) {
  listpoop.listpoop(req.params.userid)
    .then(function(rows){
      res.end(rows)
    })
    .catch((err) => setImmediate(() => { throw err; }))
})
