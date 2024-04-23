 import axios from 'axios';

 export const api = axios.create({
    baseURL:'http://172.27.64.1:3333/',
    headers:{
        Authorization:'Bearer Mg.72fFkuwr9Qof9S5XX2iv6rXG3MW5uxZ8gwi9OdQeQLrFlB7y26WLcPO5gXVn',
    },

 });
