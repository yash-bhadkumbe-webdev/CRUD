const mongoose = require('mongoose');
// declaring schema
const menue= new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   taste:{
       type:String,
       enum:["sweet","spicy","salty"],
       required:true
   },
   price:{
       type:String,
       required:true
   }
})
const Menue = mongoose.model("Menue",menue)
module.exports=Menue;