import axios from 'axios'
const axiosBaseUrl = axios.create({

    // baseURL: 'http://ebitans.wavebox.site/api/v1/',
    baseURL: 'http://localhost:5000/',

    // timeout: 10000

});

export default axiosBaseUrl