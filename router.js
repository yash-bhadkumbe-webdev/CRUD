const express = require('express');
const router = express.Router();
const Person = require('./model')
//
router.get('/person/:workType',async (req,res)=>{
    try {
        const workType=req.params.workType;

        if (workType=="chef"||workType=="waiter"||workType ="manager"){
            const response = await Person.find(work:workType)
        }else {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }catch (e) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.post('/person',async (req,res)=>{
    try {
        const data = req.body
        const newPerson = new Person (data)
        //save data
        const savedata= await newPerson.save()
    }catch (e) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


