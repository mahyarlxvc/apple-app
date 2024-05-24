import axiosInstance from '../lib/axios/configs'

const useHttp = () => {
    const Axios_get = async (url, config = {}) => await axiosInstance.get(url, config)

    const Axios_post = async (url, data, config = {}) => await axiosInstance.post(url, data, config)

    const Axios_patch = async (url, data, config = {}) => await axiosInstance.patch(url, data, config)

    const Axios_delete = async (url, config = {}) => await axiosInstance.delete(url, config)


    return {
        Axios_get,
        Axios_post,
        Axios_patch,
        Axios_delete
    }
}

export default useHttp