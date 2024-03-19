import axios from "axios"
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5015",
})

axiosInstance.interceptors.request.use(async config => {
    const token = cookies.get('token');
    if (['post', 'put', 'delete', 'get'].includes(config.method)) {
        try {
            if (token) {
                config.headers.Authorization = "Bearer " + token
            }
        } catch (e) {
            console.log(e)
        }
    }
    return config
})

export default axiosInstance
