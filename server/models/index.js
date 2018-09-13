// defines the messages and users models that your app will use
var connection = require('../db');

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
    // (from spec) request.json.username + request.json.message + request.json.roomname
    // module.exports.messages.post(1, 'Test poster msg', 'office');
    post: function (user, msg, room) {
      connection.query('INSERT INTO messages (txt, roomname, user_id) VALUES (?, ?, ?)', [msg, room, user], function (error, results, fields) {
        if (error) {
          console.error('messages.post connection.query error: ', error);
        }
      });
      connection.end();
    }
  },
  users: {
    // Ditto as above.
    get: function (callback) {
      connection.query('SELECT * FROM users', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        if (error) {
          console.error('users.get query error: ', error);
        }
        callback(results);
      });
      connection.end();
    },
    // TODO:
    post: function () { }
  }
};

module.exports.messages.post(1, 'Test poster msg', 'office');
