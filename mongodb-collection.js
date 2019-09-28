var MongoClient = require('mongodb').MongoClient;

let connStr = `mongodb+srv://<username>:<password>@w3mongodb-aqwje.mongodb.net/test?retryWrites=true&w=majority`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("students", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});