var MongoClient = require('mongodb').MongoClient;

let connStr = `mongodb+srv://<username>:<password>@w3mongodb-aqwje.mongodb.net/test?retryWrites=true&w=majority`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("students").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});