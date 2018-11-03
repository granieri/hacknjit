var mysql = require('mysql');
console.log("connecting");
export var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hacknjit",
  insecureAuth : true
});

export dbconnect(con) {
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})
}
