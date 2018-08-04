var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'ztbs';
 


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(typeof req.query);
  let obj = JSON.parse(req.query.ruleForm);

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // Get the documents collection
    const collection = db.collection('addbiao');
    // Insert some documents
    collection.insertMany([obj], function(err, result) {});
    client.close();
  });
  res.send("ok");
});

module.exports = router;