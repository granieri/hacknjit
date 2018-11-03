var mysql = require('mysql');
console.log("connecting");
export var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hacknjit",
  insecureAuth : true
});
