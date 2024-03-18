const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, eventDate} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.put("/api/rubber-duck/event-date", eventDate)

app.post('/api/prediction', (req, res) => {
    const { name, prediction } = req.body;
    console.log(`${name} predicts: ${prediction}`);
    
    res.status(201).send({ message: 'Prediction received!', data: req.body });
});

app.delete('/api/rickroll/unsubscribe', (req, res) => {
    const { email } = req.body;
    console.log(`Unsubscribing ${email} from RickRoll emails...`);
    
    res.status(200).send({ message: `Email ${email} has been successfully unsubscribed.` });
});

app.listen(4000, () => console.log("Server running on 4000"));

















