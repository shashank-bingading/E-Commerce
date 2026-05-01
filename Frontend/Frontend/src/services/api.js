import axios from "axios";

//basic instance of axios with baseURL
const API = axios.create({
    baseURL: "http://localhost:3000/api",
});

API.interceptors.request.use((req) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo && userInfo.token) {
        req.headers.Authorization = `Bearer ${(userInfo).token}`;
    }
    return req;
});

export default API;