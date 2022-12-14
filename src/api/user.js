import request from "@/utils/request";

export function loginApi(userInfo) {
    return request({
        url: 'api/login',
        method: 'post',
        data: userInfo
    })
}

export function getUserInfo() {
    return request({
        url: 'api/user/profile',
        method: 'get',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`
        }
    })
}

export function getUserGame() {
    return request({
        url: 'api/user-game',
        method: 'get'
    })
}