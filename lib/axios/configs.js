import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000"
})


axiosInstance.interceptors.response.use(
    res => res
    ,
    err => {
        console.log("erooooooooooooooooooooor",err)
        return Promise.reject(err)
    }
)

export default axiosInstance
