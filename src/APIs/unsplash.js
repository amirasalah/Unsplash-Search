import axios from 'axios';

const UnsplashAxiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { Authorization: `Client-ID 58e026ece691f31078202f84929f9cb79f86f1b7d2fbe2f39f7472bd008e33c3` }
});

export default UnsplashAxiosInstance;