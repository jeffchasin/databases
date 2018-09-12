// connect to the mySQL server

var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// Connect to the DB

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

module.exports = connection;

// console.log('connection.query: ', connection.query);

// connection.query('SELECT * FROM MESSAGES WHERE user_id = 1', function(error, results, fields) {
//   if (error) {
//     console.error('connection.query error: ', error);
//   } else {
//     console.log('The [0] message is: ', results[0].txt);
//     console.log('results: ', results);
//     console.log('fields: ', fields);
//   }
// });
