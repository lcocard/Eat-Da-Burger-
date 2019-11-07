var mysql = require('mysql');
//var connection;

// For Heroku Deployment vs. Local MySQL Database
/*if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{*/
var connection = mysql.createConnection({
  host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kqbbf0eq5r0s0j9d",
  password: "yds3sjaikh92b7d5",
  database: "ls4uo7ivrqx8zy7i"
  });
//}

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