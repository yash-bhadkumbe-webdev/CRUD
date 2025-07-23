const express = require("express");
const app = express();
const db = require('./db.js')

app.get('/', (req,res)=>{
    res.send("connection succeessfully")
})
app.get('/chicken',(req,res)=>{
    res.send("enjoy your chicken")
})
app.listen(3000,()=>{
    console.log("listong on port 3000")
})