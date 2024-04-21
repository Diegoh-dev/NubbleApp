 import axios from 'axios';

 export const api = axios.create({
    baseURL:'http://172.27.64.1:3333/',
    headers:{
        Authorization:'Bearer MQ.h5OSOR6ELL_gqW2b_u3qxkFPofxq8PQl4AiziM4OH3zNkFZvQ3_CGtF3Rq5g',
    },

 });
