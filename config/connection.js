var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "o11au7yjnep73wya",
  password: "oxfkfw3l6g15x7v8",
  database: "dirvzun6jtaxrc1q"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;