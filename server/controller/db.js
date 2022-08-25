require('dotenv').config();
const axios = require('axios');
const Promise = require('bluebird');
const path = require('path');

const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
let getProducts = () => {
  return axios.get(process.env.DB_API + '/products', {
    headers: {'Authorization': process.env.GIT_TOKEN}
})
};

module.exports = {
  getProducts: getProducts
};

// path.join(process.env.DB_API, '/products')