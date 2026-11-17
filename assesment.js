const express = require('express');

const app = express();

app.get('/mars', (req, res) => {
    res.send({ message: 'Hello from Mars' });
})

app.get('/saturn', (req, res) => {
    res.send({ message: 'Hello from Saturn' });
})

app.get('/pluto', (req, res) => {
    res.send({ message: 'Hello from Pluto' });
})

app.get('/jupiter', (req, res) => {
    res.send({ message: 'Hello from Jupiter' });
})

app.listen(3005, () => {
    console.log('server is running on port 3005');
})