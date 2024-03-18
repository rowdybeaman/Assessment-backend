module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["I wish to be big", "Rowdy will get 100% on his exam", "You will not be rickrolled today", "Rowdy will spend too much time on this"];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    }
};

app.put('/api/rubber-duck/event-date', (req, res) => {
    // Assuming you have body-parser middleware to parse JSON request bodies
    const { eventDate } = req.body;
    
    console.log(`The next Giant Rubber Duck event date has been updated to: ${eventDate}`);
    
    res.send({ message: 'Event date updated successfully!' });
});



