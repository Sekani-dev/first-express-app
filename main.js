const express = require('express');

const app = express();

app.get('/earth', (req, res) => {
    res.send({ message: 'Hello from the earth' });
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})