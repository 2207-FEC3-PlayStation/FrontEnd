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
  console.log('request body, ', req._parsedUrl.pathname);
  console.log('params: ', req.query.product_id);
  console.log('url: ', req.url)
  db.getProducts(req._parsedUrl.pathname, req.query.product_id)
    .then((result) => {
      console.log('data: ', result.data);
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log('This is the error: ', err);
      res.status(400).send(err);
    })
})


const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);