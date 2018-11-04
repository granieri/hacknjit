const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.insertuser = function (userid, firstname, lastname, email){
  return new Promise(function(resolve, reject){
    var conn = dbc.con;
    var sql = "INSERT INTO user (id, firstname, lastname, email) VALUES ('" + userid + "', '" + firstname + "', '" + lastname + "', '" + email + "');";
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
