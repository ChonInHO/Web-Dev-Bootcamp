const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient; //thing that we need to establish the connection

let database;

//establish connection and get such a client
async function connect() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017"); //create connection to mongodb server
  database = client.db("blog"); // connect to blog database
}

// allow to use the database outside of this file
function getDb() {
  if (!database) {
    throw { message: "database connection not established!" };
  }
  return database;
}

//expose connect and getDb functions to the outside world
module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
