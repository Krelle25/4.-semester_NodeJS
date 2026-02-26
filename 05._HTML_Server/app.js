// const express = require('express');
import express from 'express';
const app = express();

app.use(express.static('public'));

// const commonjsCookiesUtil = require('./util/commonjsCookiesUtil.js');
// console.log(commonjsCookiesUtil.getCookie());

import { esModuleCookieFactory } from './util/esModuleCookiesUtil.js';
console.log(esModuleCookieFactory());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html');
});

app.get('/cookieFactory', (req, res) => {
    res.sendFile(__dirname + '/public/cookieFactory/cookieFactory.html');
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});