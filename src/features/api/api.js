import axios from "axios";

const api = axios.create({
    baseURL : "https://611cbe41a18e850017decbfa.mockapi.io"
});

export default api;