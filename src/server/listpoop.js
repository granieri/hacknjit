const dbc = require('./dbconnection')

var exports = module.exports = {}

exports.listpoop = function (user_id){
  let con = dbc.con;
  con.connect(function(err) {


  if (err) throw err;
  var user_id = 5;
  var sql = "SELECT * FROM poops WHERE user_id = '" + user_id + "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });
}
