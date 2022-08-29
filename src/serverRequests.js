import axios from 'axios';

const server = {

  get: (endpoint, params) => {
    return axios.get(endpoint, {params: params})
  }

};

export default server;