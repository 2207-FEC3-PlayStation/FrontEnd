import axios from 'axios';

const server = {

  get: (endpoint, params) => {
    console.log('endpoint ', endpoint);
    console.log('params ', params);
    return axios.get(endpoint, {params: params})
  }

};

export default server;