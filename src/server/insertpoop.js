import * as dbc from './dbconnection';

export exec() {
  let con = dbc.con;

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO poops (user_id, datetime, type, description, location) VALUES ('" + user_id + "', '" + datetime +"',
  '" + type + "', '" + description + "', '" + location + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
