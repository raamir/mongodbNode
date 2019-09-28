var MongoClient = require('mongodb').MongoClient;

let connStr = `mongodb+srv://<username>:<password>@w3mongodb-aqwje.mongodb.net/test?retryWrites=true&w=majority`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var doc = { name: "Rija Aamir", address: "DePaul University" };
  dbo.collection("students").insertOne(doc, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});