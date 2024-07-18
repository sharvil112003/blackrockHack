// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://tptech0707:project0123@cluster0.rrxodun.mongodb.net/temp?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// MongoDB Schema
const landDetailSchema = new mongoose.Schema({
    name: String,
    mobileNum: String,
    landLocation: String,
    landArea: Number,
    landDesc: String
});

const LandDetail = mongoose.model('LandDetail', landDetailSchema);

// Routes

// Fetch all land details
app.get('/api/landDetails', (req, res) => {
    LandDetail.find()
        .then(landDetails => res.json(landDetails))
        .catch(err => res.status(500).json({ error: err.message }));
    });


app.post('/api/landDetails', (req, res) => {
    const { name, mobileNum, landLocation, landArea, landDesc } = req.body;

    if (!name || !mobileNum || !landLocation || !landArea || !landDesc) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    const newLandDetail = new LandDetail({
        name,
        mobileNum,
        landLocation,
        landArea,
        landDesc
    });

    newLandDetail.save()
        .then(() => res.json({ message: 'Form data saved successfully.' }))
        .catch(err => res.status(500).json({ error: err.message }));
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
