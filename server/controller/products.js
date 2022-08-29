require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

//-------will need to update with passed info-----
module.exports = {

  getProduct: (id) => {
    return axios.get(process.env.DB_API + '/products/' + id, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },
  getProducts: (params) => {
    var paramString = '?';
    for (key in params) {
      paramString += key + '=' + params[key] + '&'
    }
    paramString = paramString.substring(0, paramString.length - 1);
    return axios.get(process.env.DB_API + '/products' + paramString, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },
  getStyles: (id) => {
    return axios.get(process.env.DB_API + '/products/' + id + '/styles', {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },
  getRelated: (id) => {
    return axios.get(process.env.DB_API + '/products/' + id + '/related', {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  }
};