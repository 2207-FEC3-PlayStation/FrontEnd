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
      paramString += key + '=' + params[key] + '?'
    }
    var ques_id = paramString.substring(13, paramString.length - 12);
    var count = paramString.substring(19, paramString.length - 1);
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
    var qID = params.question_id;
    return axios.post(process.env.DB_API + '/qa/questions/' + qID + '/answers', data, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  helpful: (id) => {
    var qOrA = '';
    var val = '';
    for (key in id) {
      qOrA += key
      val = id[key]
    }
    if (qOrA[0] === 'a') {
      var x = 'answers/';
    } else {
      var x = 'questions/';
    }
    return axios.put(process.env.DB_API + '/qa/' + x + val + '/helpful', null, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

  report: (id) => {
    console.log('report');
    console.log('put(',process.env.DB_API + '/qa/answers/' + id.answer_id + '/report')
    return axios.put(process.env.DB_API + '/qa/answers/' + id.answer_id + '/report', null, {
      headers: {'Authorization': process.env.GIT_TOKEN}
    })
  },

}