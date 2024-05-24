import { ALL_COUESES_API, CATEGORIES_API, FIGURES_API, MENUS_API } from "../constants/api"
import axiosInstance from "../lib/axios/configs"

const Axios_get = async (url, config = {}) => await axiosInstance.get(url, config)

const Axios_post = async (url, data, config = {}) => await axiosInstance.post(url, data, config)

const Axios_patch = async (url, data, config = {}) => await axiosInstance.patch(url, data, config)

const Axios_delete = async (url, config = {}) => await axiosInstance.delete(url, config)

// NAVBAR utils 

export const getMenus = async () => {
    const res = await Axios_get(MENUS_API)
    const menus = await res?.data
    return menus
}

export const getCategories = async () => {
    const res = await Axios_get(CATEGORIES_API)
    const categories = await res?.data
    return categories
}

export const getFigures = async () => {
    const res = await Axios_get(FIGURES_API)
    const figures = await res?.data
    return figures
}
export const getLatestCourses = async (count) => {
    const res = await Axios_get(ALL_COUESES_API)
    const courses = await res?.data
    const lastIndex = (courses.length)
    const startIndex = (lastIndex - count)
    const latest = courses.slice(startIndex, lastIndex)
    return latest
}