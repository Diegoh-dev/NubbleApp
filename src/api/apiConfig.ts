 import axios from 'axios';

 export const api = axios.create({
    baseURL:'http://172.27.64.1:3333/',
    //o header está sendo passado como default ma função updateToken
 });
