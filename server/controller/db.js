require('dotenv').config();
const axios = require('axios');
const Promise = require('bluebird');

const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
let getProducts = () => {
  return 'it is working!'
  // axios.getUri({url: URI + 'products?page=1', headers: {'Authorization': GIT}})
};

module.exports = {
  getProducts: getProducts
};