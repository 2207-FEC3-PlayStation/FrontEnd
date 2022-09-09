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
app.get('/product', (req, res) => {models.Products.getProduct(req, res)});

app.get('/products', (req, res) => {models.Products.getProducts(req, res)});

app.get('/products/styles', (req, res) => {models.Products.getStyles(req, res)});

app.get('/products/related', (req, res) => {models.Products.getRelated(req, res)});



//-------Reviews Handlers-------
app.get('/reviews', (req, res) => {models.Reviews.getReviews(req, res)});

app.get('/reviews/meta', (req, res) => {models.Reviews.getReviewData(req, res)});

app.post('/reviews', (req, res) => {models.Reviews.addReview(req, res)});

app.put('/reviews/helpful', (req, res) => {models.Reviews.helpful(req, res)});

app.put('/reviews/report', (req, res) => {models.Reviews.report(req, res)});

//------------------------------- QandA Handlers -------------------------------

// Questions List
app.get('/qa/questions', (req, res) => {models.QandA.getQuestions(req, res)});

// Answers List
app.get('/qa/answers', (req, res) => {models.QandA.getAnswers(req, res)});

// Add a Question
app.post('/qa/questions', (req, res) => {models.QandA.addQuestion(req, res)});

// Add an Answer
app.post('/qa/answers', (req, res) => {models.QandA.addAnswer(req, res)});

// Mark Question as Helpful
app.put('/qa/questions/helpful', (req, res) => {models.QandA.helpful(req, res)});
// Report Question --------- NOT REQUIRED
//app.put('/qa/questions/report'), (req, res) => {models.QandA.report('/questions', req, res)};

// Mark Answer as Helpful
app.put('/qa/answers/helpful', (req, res) => {models.QandA.helpful(req, res)});

// Report Answer
app.put('/qa/answers/report', (req, res) => {models.QandA.report(req, res)});


//-------Cart Handlers-------


app.get('/cart', (req, res) => {models.Cart.getCart(req, res)});

app.post('/cart', (req, res) => {models.Cart.addToCart(req, res)});
//-------Interactions Handlers-------

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);