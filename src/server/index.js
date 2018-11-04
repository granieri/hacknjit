var express = require('express'); // Web Framework
const listpoop = require('./listpoop')
const getpoop = require('./getpoop')
const insertpoop = require('./insertpoop')
const checkuser = require('./checkuser')
const insertuser = require('./insertuser')
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});


app.get('/listpoop/:userid/', function (req, res) {
  listpoop.listpoop(req.params.userid)
    .then(function(rows){
      res.end(JSON.stringify(rows))
    })
})

app.get('/getpoop/:poopid/', function (req, res) {
  getpoop.getpoop(req.params.poopid)
    .then(function(rows){
      res.end(JSON.stringify(rows))
    })
})

app.get('/insertpoop/:userid/:type/:description/:location/', function (req, res) {
  insertpoop.insertpoop(req.params.userid, req.params.type, req.params.description, req.params.location)
    .then(function(rows){
      res.end(JSON.stringify(rows))
    })
})

app.get('/checkuser/:userid/', function (req, res) {
  checkuser.checkuser(req.params.userid)
    .then(function(rows){
      res.end(JSON.stringify(rows))
    })
})

app.get('/insertuser/:userid/:firstname/:lastname/:email/', function (req, res) {
  insertuser.insertuser(req.params.userid, req.params.firstname, req.params.lastname, req.params.email)
    .then(function(rows){
      res.end(JSON.stringify(rows))
    })
})
