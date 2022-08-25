require('dotenv').config();
const express = requires('express');

const URI = process.env.DB_API;
const GIT = process.env.GIT_TOKEN;

module.exports = {


//-------will need to update with passed info-----
getProducts: axios.get(URI + 'products', {headers: {'Authorization': GIT}})

}
