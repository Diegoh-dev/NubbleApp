import axios from 'axios';

export const BASE_URL = 'http://172.27.64.1:3333/';
export const api = axios.create({
  baseURL: BASE_URL,
  //o header está sendo passado como default ma função updateToken
});
