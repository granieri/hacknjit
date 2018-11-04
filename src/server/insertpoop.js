const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.insertpoop = function (userid, type, description, location){
  return new Promise(function(resolve, reject){
    var conn = dbc.con;
    var sql = "INSERT INTO poops (user_id, datetime, type, description, location) VALUES ('" + userid + "', '" + Math.round(new Date().getTime()/1000) + "', '" + type + "', '" + description + "', '" + location + "');";
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}


//"INSERT INTO poops (user_id, datetime, type, description, location) VALUES ('" + user_id + "', '" + datetime +"',
