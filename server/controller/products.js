require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
module.exports = {

  getProduct: (param) => {
    return axios.get(process.env.DB_API + '/products/' + param, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },
  getStyles: (id) => {
    console.log(id);
    return axios.get(process.env.DB_API + '/products/' + id + '/styles', {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  }
};