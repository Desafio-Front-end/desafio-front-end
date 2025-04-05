import axios from "axios";

// ATRIBUINDO A ESSA VÁRIAVEL O ENDERÇO DO BACK-END, USANDO O AXIOS
const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

//INTERCEPTANDO O TOKEN DO USUÁRIO
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;