import axios from 'axios';

const token: string = window.localStorage.access_token

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

window.axios = axios;

export default axios;