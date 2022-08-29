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
}