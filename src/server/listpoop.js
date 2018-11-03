import * as dbc from './dbconnection';

let con = dbc.con;

con.connect(function(err) {
if (err) throw err;
var sql = "SELECT * FROM poops WHERE user_id = '" + user_id + "';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
