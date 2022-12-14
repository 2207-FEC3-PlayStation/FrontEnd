require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {
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


  getReviewData: (path) => {
    return axios.get(process.env.DB_API + path, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  addReview: (data) => {
    return axios.post(process.env.DB_API + '/reviews', data, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  helpful: (reviewID) => {
    return axios.put(process.env.DB_API + '/reviews/' + reviewID + '/helpful', null, {headers: {'Authorization': process.env.GIT_TOKEN}})
  },

  report: (reviewID) => {
    return axios.put(process.env.DB_API + '/reviews/' + reviewID + '/report', null, {headers: {'Authorization': process.env.GIT_TOKEN}})
  }
}