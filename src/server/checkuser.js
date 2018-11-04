const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.checkuser = function (userid){
  return new Promise(function(resolve, reject){
    var conn = dbc.con;
    var sql = "SELECT * FROM user where id = '" + userid + "';";
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
