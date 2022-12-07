const { response } = require('express');
const express = require('express');
const app = express();
const MongoClient = require('mongodb'). MongoClient;

const uri = "mongodb+srv://bebe4sure:funmi0612@datavisualization.pkdc8hm.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
// {"_id":"63736156d8c6e12779ba3653","Time":"1850","Anomaly (deg C)":"-0.41765878"}

var database;

app.listen(8080, ()=>{
    console.log("log run on 8080");
    MongoClient.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, result)=>{
        if(err) throw err
        database = result.db("data");
        console.log("database connected");
    })
  })

app.get("/globalData", (req, resp) => {
    database.collection("global_data").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/nothernHemisphere", (req, resp) => {
    database.collection("nothernhemisphere").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/southernHemisphere", (req, resp) => {
    database.collection("southernHemisphere").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/southernHemispere_monthly", (req, resp) => {
    database.collection("southernHemispere_monthly").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/nHem_Monthly", (req, resp)=>{
    database.collection("nHem_Monthly").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})