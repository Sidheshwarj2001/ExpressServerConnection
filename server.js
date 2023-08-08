const express =require('express');
const App = express();

const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017";

const Client = new MongoClient(url);

const port = 5100;

App.listen(port , (req,res) =>{
  console.log(`Server is started successfully at port no : ${port}......`);
})

App.get("/" , (req ,res) =>{
  res.send("Marvellous server is Live");
})

async function getConnection()
{
  let result = await Client.connect();
  let db = result.db("Marvellous");
  let collection = db.collection("Batches");
  let res = await collection.find({}).toArray();

  console.log(res);
}

getConnection();
