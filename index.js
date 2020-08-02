const express = require('express');
const app = express();

const _PORT = 3000;

app.get('/', (req,res) => {
    res.send('Hello from nodeJS');
});

app.listen(_PORT, () => console.log(`Example app listening at http://localhost:${_PORT}`))