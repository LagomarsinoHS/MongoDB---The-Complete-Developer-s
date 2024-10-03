const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient
const mongoURL = "mongodb://localhost:27017/Mongo_Course"

let _db;

const initDb = async (callback) => {
  try {
    if (_db) {
      console.log("Already Connected");
      return _db;
    }

    const client = (await mongoClient.connect(mongoURL)).db();
    _db = client
    console.log("DB Connected!");

  } catch (error) {
    console.log("Error connecting DB!", error);
  }
};

const getDb = () => {
  if (!_db) {
    throw new Error('Database not initialized');
  }
  return _db;
};


module.exports = {
  initDb,
  getDb
}