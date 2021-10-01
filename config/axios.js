    import axios from 'axios';

const axiosClient = axios.create({
    baseURL:  process.env.apiURL,
    withCredentials:true
  
});

export default axiosClient; 