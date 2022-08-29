require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');
// const db = require('./controller/db.js');
const Promise = require('bluebird');
const models = require('./models/modelIndex.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

//-------Product Handlers-------
app.get('/products', (req, res) => {models.Products.getProducts(req, res)});

app.get('/products/styles', (req, res) => {models.Products.getStyles(req, res)});



//-------Reviews Handlers-------
app.get('/reviews/meta', (req, res) => {models.Reviews.getReviews(req, res)})

//-------QandA Handlers-------


//-------Cart Handlers-------

//-------Interactions Handlers-------

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);