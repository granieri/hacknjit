const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.listpoop = function (user_id){
  let con = dbc.con;
  con.connect()

  var sql = "SELECT * FROM poops WHERE user_id = '" + user_id + "';";
  let results = []
  con.query(sql, function (err, rows, fields) {
    if (err) throw err
    for(var i in rows){
      results.push(rows[i])
    }
  }

  con.end();
  return results
}
