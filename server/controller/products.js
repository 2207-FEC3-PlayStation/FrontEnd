require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
module.exports = {

  getProduct: (path, param) => {
    return axios.get(process.env.DB_API + path + '/' + param, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  }

};