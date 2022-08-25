const axios = require('axios');
const express = require('express');
const path = require('path');
const db = require('./controller/db.js');


const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/products', (req, res) => {
  db.getProducts()
    .then((result) => {
      console.log('results: ', result);
    })
    .err((err) => {
      console.log(err);
    })
})
