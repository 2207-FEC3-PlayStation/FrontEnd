require('dotenv').config();
const axios = require('axios');
const Promise = require('bluebird');
const path = require('path');

const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
let getProducts = (path, param) => {
  console.log('api request path: ', process.env.DB_API + path + '/' + param)
  return axios.get(process.env.DB_API + path + '/' + param, {
    headers: {'Authorization': process.env.GIT_TOKEN}
})
};

module.exports = {
  getProducts: getProducts
};
