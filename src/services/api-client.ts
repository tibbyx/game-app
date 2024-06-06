import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dc74db818f9d40dcb41db3765739128b'
    }
})