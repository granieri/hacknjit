const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.getinsight = function (user_id){
  return new Promise(function(resolve, reject){
    console.log((Math.round(new Date().getTime()/1000) - 604800))
    var conn = dbc.con;
    var sql = "SELECT count(id) as count, dayofweek(DATE_FORMAT(FROM_UNIXTIME(`datetime`), '%7-%m-%d')) AS dayoftheweek FROM poops WHERE user_id = '" + user_id + "' AND datetime > '" + (Math.round(new Date().getTime()/1000) - 604800) + "' group by dayoftheweek;"
    conn.query(sql, function(err, rows, fields){
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
