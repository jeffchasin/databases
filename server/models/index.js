// defines the messages and users models that your app will use
var connection = require('../db');

// Test query outside of exports: (this works)
// connection.query('SELECT * FROM messages', function (error, results, fields) {
//   // error will be an Error if one occurred during the query
//   // results will contain the results of the query
//   // fields will contain information about the returned results fields (if any)
//   if (error) {
//     console.error('messages.get db.query error: ', error);
//   }
//   console.log('The [0] message is: ', results[0].txt);
//   console.log('results: ', results);
//   console.log('fields: ', fields);
// });
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      connection.query('SELECT * FROM messages', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        if (error) {
          console.error('messages.get query error: ', error);
        }
        // callback(results);
        callback(results);
        // results[0].txt -> Test message
        // console.log('The query results: ', JSON.stringify(results, null, 2)); ->
        /*
        The query results:
        [
          {
            "id": 1,
            "txt": "Test message",
            "roomname": "lobby",
            "objectid": "adsf1-45-abc321",
            "user_id": 1
          },
          {
            "id": 2,
            "txt": "Test message",
            "roomname": "lobby",
            "objectid": "xyzf2-56-frdb320",
            "user_id": 1
          }
        ]
        */
      });
      connection.end();
    },
    // a function which can be used to insert a message into the database
    post: function (msg) {
      connection.connect();
      connection.query('INSERT INTO messages (txt, roomname, objectid, user_id) VALUES (' + msg + ', <ROOM>, <ORDERID>, <USERID>)', function (error, results, fields) {
        if (error) {
          console.error('messages.post connection.query error: ', error);
        }
      });
      // connection.end();
      return results;
    }
  },
  // TODO: YOU ARE HERE - test above, complete below.
  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

module.exports.messages.get(function(res) {
  console.log(res[0].txt);
});
