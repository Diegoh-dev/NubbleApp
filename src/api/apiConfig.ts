 import axios from 'axios';

 export const api = axios.create({
    baseURL:'http://172.27.64.1:3333/',
    headers:{
        Authorization:'Bearer MzQ.VC8JqsDiCWToOg5k2DcFSqkJXe-euyvOkE5JLO3VklQXJy9OqqtvOdgXe6YZ',
    },

 });
