const express = require('express');

const app = express();

app.get('/mars', (req, res) => {
    res.send({ message: 'Hello from Mars' });
})

app.get('/saturn', (req, res) => {
    res.send({ message: 'Hello from Saturn' });``
})

app.get('/pluto', (req, res) => {
    res.send({ message: 'Hello from Pluto' });
})

app.get('/mercury', (req, res) => {
    res.send({ message: 'Hello from Mercury' });
})

app.get('/jupiter', (req, res) => {
    res.send({ message: 'Hello from Jupiter' });
})

app.get('/venus', (req, res) => {
    res.send({ message: 'Hello from Venus' });
})

app.get('/earth', (req, res) => {
    res.send({ message: 'Hello from the earth' })
})

app.get('/neptune', (req, res) => {
    res.send({ message: 'Hello from Neptune' });
})

app.listen(3005, () => {
    console.log('server is running on port 3005');
})
