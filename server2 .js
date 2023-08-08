
const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017";

const Client = new MongoClient(url);


async function getConnection()
{
  let result = await Client.connect();//connect with url

  let db = result.db("Marvellous");  // 
  
  let collection = db.collection("Batches");
  
  let res = await collection.find({}).toArray();

  console.log(res);
}

getConnection();
