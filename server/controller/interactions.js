require('dotenv').config();
const axios = require('axios');
const Promise = require('bluebird');
const path = require('path');

const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {
}