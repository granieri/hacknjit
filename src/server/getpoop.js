const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.getpoop = function (poopid){
  return new Promise(function(resolve, reject){
    var conn = dbc.con;
    var sql = "SELECT * FROM poops WHERE id = '" + poopid + "';";
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
//var sql = "SELECT * FROM poops WHERE poopid = '" + poopid + "';";
