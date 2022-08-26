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
  console.log('params: ', Object.values(req.query)[0]);
  db.getProducts(req._parsedUrl.pathname, Object.values(req.query)[0])
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log('This is the error: ', err);
      res.status(400).send(err);
    })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);