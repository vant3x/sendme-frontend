import axios from 'axios';

const axiosClient = axios.create({
    baseURL:  process.env.apiURL 
  
});

export default axiosClient; 