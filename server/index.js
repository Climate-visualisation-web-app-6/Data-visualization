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

app.get("/northenHemispere_monthly", (req, resp) => {
    database.collection("nHem_Monthly").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/global_data_monthly", (req, resp) => {
    database.collection("global_data monthly").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/vone_annual", (req, resp) => {
    database.collection("v1_yearly").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.get("/vone_monthly", (req, resp) => {
    database.collection("v1_monthly").find({}).toArray((err,res)=>{
        if(err) throw err
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
app.get("/v7_ppm_a", (req, resp)=>{
    database.collection("v7_ppm_a").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/v5_co2", (req, resp)=>{
    database.collection("v5_co2").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/v6_yearly_a", (req, resp)=>{
    database.collection("v6_yearly_a").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})

app.get("/v7_stc_b", (req, resp)=>{
    database.collection("v7_stc_b").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})
app.get("/v9", (req, resp)=>{
    database.collection("V9").find({}).toArray((err,res) =>{
        if (err) throw err
       resp.send(res) 
    });
})



// user data
app.post("/user_data", (req, resp) => {
    database.collection("user").find({}).toArray((err,res)=>{
        if(err) throw err
    resp.send(res)
    });
})

app.post("/register", (req, resp) => {
    database.collection("user").insertOne(req.body, (err, res) =>{
        if (err) throw err;
        resp.send(res)
    })
})