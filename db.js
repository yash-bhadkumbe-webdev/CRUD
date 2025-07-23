const mongoose = require('mongoose');
 //connection to mongoDB
const mongourl ='mongodb://localhost:27017/hotel'
//establish connection
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db= mongoose.connection
//event listner
db.on('connected',()=>{
    console.log("connetion established successfully");
})
db.on('error',(error)=>{
    console.error("error ouccured",error)
})
db.on("disconnected",()=>{
    console.log("connection disconneted")
})
module.exports=db;