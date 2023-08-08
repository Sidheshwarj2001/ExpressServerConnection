const { MongoClient } = require("mongodb")
const url = "mongodb://127.0.0.1:27017";

const Client = new MongoClient(url);

/////////////////////////////////////////////////////////////////// 
// getConnection
// used to connect with MongoDB Server  -> DB -> collection
// 
/////////////////////////////////////////////////////////////////

async function getConnection() {
  let result = await Client.connect();//connect with url
  let db = result.db("Marvellous");  // 
  return db.collection("Batches");
  
}

/////////////////////////////////////////////////////////////////// 
// ReadData
// used to connect with MongoDB Server  -> DB -> collection
// 
/////////////////////////////////////////////////////////////////

async function ReadData ()
{
  let Data =await getConnection();
  Data =await Data.find().toArray();
  console.log("Data from marvellous database is : ")
  console.log(Data);
}

function main()
{
  ReadData()
}

//starter of the application

main();