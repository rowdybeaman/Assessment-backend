const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//zoltar

complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

zoltarImage.addEventListener('click', getFortune);

// duck

document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const eventDate = document.getElementById('eventDate').value;
    axios.put('http://localhost:4000/api/rubber-duck/event-date', { eventDate })
        .then(response => alert('Event date updated successfully!'))
});

// Mike Tyson

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const prediction = document.getElementById('prediction').value;
    axios.post('http://localhost:4000/api/prediction', { name, prediction })
        .then(response => alert('Prediction submitted successfully!'))
        .catch(error => console.error('Failed to submit prediction', error));
});

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const prediction = document.getElementById('prediction').value;

    if (prediction === "Mike Tyson") {
        alert("There's no way he loses! He's the GOAT!");
    } else if (prediction === "Jake Paul") {
        alert("Nope, you are wrong, try a different selection");
    } else {
        axios.post('http://localhost:4000/api/prediction', { name, prediction })
            .then(response => alert('Prediction submitted successfully!'))
            .catch(error => console.error('Failed to submit prediction', error));
    }
});

//

document.getElementById('unsubscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    axios.delete('http://localhost:4000/api/rickroll/unsubscribe', { data: { email } })
        .then(response => alert('You have been successfully unsubscribed.'))
        .catch(error => console.error('Failed to unsubscribe', error));
});


