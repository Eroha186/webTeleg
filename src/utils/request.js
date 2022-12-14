import axios from 'axios'

const service = axios.create({
    baseURL: 'https://f059-95-170-152-45.in.ngrok.io/',
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