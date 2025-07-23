const express = require("express");
const app = express();
const db = require('./db.js');
const Person = require('./model');
const Menue = require('./menue');

// Parse JSON bodies (built-in)
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Connection successfully");
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body;

        // Create a new Person document
        const newPerson = new Person(data);

        // Save to DB
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/menue',async (req,res)=>{
    try {
        const data =req.body;
        // Create a new Person document
        const newMenue = new Menue(data);

        //saveBD
        const response = await newMenue.save();
        console.log("data saved");
        res.status(200).json(response)

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
