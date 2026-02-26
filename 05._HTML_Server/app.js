const express = require('express');
const app = express();

app.use(express.static('public'));

const cookiesUtil = require('./util/cookiesUtil.js');

// console.log(cookiesUtil.getCookie());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html');
});

app.get('/cookieFactory', (req, res) => {
    res.sendFile(__dirname + '/public/cookieFactory/cookieFactory.html');
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});