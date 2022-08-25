require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
const db = require('./controller/db.js');
const Promise = require('bluebird');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log(db.getProducts);
  db.getProducts()
    .then((result) => {
      console.log('results: ', result);
    })
    .err((err) => {
      console.log(err);
    })
})


const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);