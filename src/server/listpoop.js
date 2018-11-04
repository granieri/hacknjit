const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.listpoop = function (user_id){
  return new Promise(function(resolve, reject){
    var conn = dbc.con;
    var sql = "SELECT * FROM poops WHERE user_id = '" + user_id + "';"
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
