import axios from 'axios';
const baseURL = 'http://localhost:8080'

const server = {

  get: (endpoint, params) => {
    console.log('endpoint ', endpoint);
    console.log('params ', params);
    return axios.get(endpoint, {params: params, baseURL: baseURL})
  }

};

export default server;