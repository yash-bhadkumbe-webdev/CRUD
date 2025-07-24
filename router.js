const express = require('express');
const {route} = require("express/lib/application");
const router = express.Router;
const model = require('./model')
route.get('/person/:workType',async (req,res)=>{
    try {
        const personData = await model.find();
        console.log("data found it")
        res.status(200).json(personData);
    }catch (e) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.get