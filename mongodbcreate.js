var MongoClient = require('mongodb').MongoClient;

let connStr = `mongodb+srv://<username>:<password>@w3mongodb-aqwje.mongodb.net/test?retryWrites=true&w=majority`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});