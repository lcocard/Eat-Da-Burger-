var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "WkmGry}@[h639hFNTy6Mo4?(",
  database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export the Connection
module.exports = connection;