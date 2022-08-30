require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {
  //may need to pass in session info after creating an authentication method
  getCart: () => {
    return axios.get(process.env.DB_API + '/cart', {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  }
}