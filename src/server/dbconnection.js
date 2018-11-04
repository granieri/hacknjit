var mysql = require('mysql');
console.log("connecting");

var exports = module.exports = {}

exports.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hacknjit",
  insecureAuth : true
});
