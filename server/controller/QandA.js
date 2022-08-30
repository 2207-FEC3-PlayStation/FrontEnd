require('dotenv').config();
const axios = require('axios');
const path = require('path');
const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {
  getQuestions: (params) => {
    var paramString = '?';
    if (!params.product_id) {
      throw new Error('No product_id provided');
    }
    for (key in params) {
      paramString += key + '=' + params[key] + '&'
    }
    paramString = paramString.substring(0, paramString.length - 1);
    console.log('paramString: ', paramString);
    return axios.get(process.env.DB_API +  '/qa/questions' + paramString, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  getAnswers: (params) => {
    var paramString = '?';
    if (!params.question_id) {
      throw new Error('No question_id provided');
    }
    for (key in params) {
      paramString += key + '=' + params[key] + '&'
    }
    paramString = paramString.substring(0, paramString.length - 1);
    console.log('paramString: ', paramString);
    return axios.get(process.env.DB_API +  '/qa/questions' + paramString, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  addQuestion: () => {

  },

  addAnswer: () => {

  },

  helpful: (endpoint, id) => {

  },

  report: (endpoint, id) => {

  },

}