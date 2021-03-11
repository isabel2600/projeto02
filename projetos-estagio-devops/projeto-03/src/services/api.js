import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost:3333'

});

api.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('@tgl/auth_token'))}`
    return config; 
});

export default api;