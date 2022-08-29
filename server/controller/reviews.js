require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {
  getReviewData: (path) => {
    return axios.get(process.env.DB_API + path, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  getReviews: (params) => {
    var paramString = '?';
    if (!params.product_id) {
      throw new Error('No product_id provided');
    }
    for (key in params) {
      paramString += key + '=' + params[key] + '&'
    }
    paramString = paramString.substring(0, paramString.length - 1);
    return axios.get(process.env.DB_API +  '/reviews' + paramString, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  addReview: () => {

  },

  helpful: () => {

  },

  report: () => {

  }
}