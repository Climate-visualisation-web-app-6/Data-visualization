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


app.get("/v1_yearly", (req, resp)=>{
    database.collection("v1_yearly").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})

app.get("/v1_monthly", (req, resp)=>{
    database.collection("v1_monthly").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})

app.get("/v2_temp", (req, resp)=>{
    database.collection("v2_temp").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/v3_monthly", (req, resp)=>{
    database.collection("v3_monthly").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/v3_yearly", (req, resp)=>{
    database.collection("v3_yearly").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/V4_yearly_a", (req, resp)=>{
    database.collection("V4_yearly_a").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/V4_yearly_b", (req, resp)=>{
    database.collection("V4_yearly_b").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/V4_yearly_c", (req, resp)=>{
    database.collection("V4_yearly_c").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})