import axios from 'axios'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    timeout: 300000
})

service.interceptors.request.use((request) => {
    return request
})

service.interceptors.request.use((config) => {
        config.params = config.params || {}
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service