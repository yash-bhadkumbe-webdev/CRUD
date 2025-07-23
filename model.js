const mongoose = require('mongoose');
//define blueprint
const personSchema = new mongoose.Schema({
     name:{
         type:String,
         required:true,
     }
})