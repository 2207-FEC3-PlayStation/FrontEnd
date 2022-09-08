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
    // console.log('paramString: ', paramString);
    return axios.get(process.env.DB_API +  '/qa/questions' + paramString, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  getAnswers: (params) => {
    console.log('params = ', params);
    var paramString = '?';
    if (!params.question_id) {
      throw new Error('No question_id provided');
    }
    for (key in params) {
      paramString += key + '=' + params[key] + '?'
    }
    var ques_id = paramString.substring(13, paramString.length - 12);
    var count = paramString.substring(19, paramString.length - 1);
    console.log('ques_id: ', ques_id);
    console.log('count: ', count);
    return axios.get(process.env.DB_API +  '/qa/questions/' + ques_id + '/answers' + count, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })

  },

  addQuestion: (data) => {
    return axios.post(process.env.DB_API + '/qa/questions', data, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  addAnswer: (data, params) => {
    console.log('azhere --->');
    console.log('data = ', data);
    console.log('params = ', params);
    var qID = params.question_id;
    console.log('qID = ', qID);
    console.log('.pos(', process.env.DB_API + '/qa/questions/' + qID + '/answers', ')');
    return axios.post(process.env.DB_API + '/qa/questions/' + qID + '/answers', data, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  helpful: (endpoint, id) => {

  },

  report: (endpoint, id) => {

  },

}