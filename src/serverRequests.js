import axios from 'axios';

const server = {

  //link all static endpoints together while adding variables to the parameters,  e.g., /(products/styles, 6646)
  get: (endpoint, params) => {
    return axios.get(endpoint, {'params': params})
  },

  post: (endpoint, data, params) => {
    return axios.post(endpoint, data, {'params': params})
  },

  put: (endpoint, params) => {
    return axios.put(endpoint, null, {'params': params})
  }
};

export default server;