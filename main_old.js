import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config({})
const ObjectId = mongoose.Types.ObjectId;
const DATABASE_NAME = 'Mongo_Course'

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Conectado!");
    //mongoose.connection.useDb('Hospital').dropDatabase()
    const collection = mongoose.connection.useDb(DATABASE_NAME).collection('books');

    const toInsert = [
      { name: "Max Schwarz", age: 29, address: { street: "main" } },

    ]

    collection.updateOne({ title: 'requiresTeam' }, { $set: { title: 'requiresTeam' } }, { upsert: true })
    collection.updateMany({}, { $min: { "members": 10 }, $set: { playersRequired: 2 } })
    collection.updateMany({ title: 'requiredTeam' }, { $inc: { members: 10 } })






  } catch (error) {
    console.log(error)
  } finally {
    await mongoose.connection.close();
    console.log('Conexión cerrada');
  }
}


async function main2() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    const collection = mongoose.connection.useDb('Mongo_Course').collection('persons');

    const result = await collection.aggregate([
      { $match: { "dob.age": { $gt: 50 } } },
 
      {
        $group: {
          _id: { gender: "$gender" },
          total: { $sum: 1 },
          avg: { $avg: "$dob.age" }
        }
      },
      { $sort: { total: -1 } }
    ]).toArray()


    console.log(result)
  } catch (error) {
    console.log(">>>Error")
    console.log(error);
    console.log(">>>Error")
  } finally {
    await mongoose.connection.close();
    console.log('Conexión cerrada');
  }
}
main2()


