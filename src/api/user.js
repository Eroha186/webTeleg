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
        url : 'api/user-info',
        method: 'get'
    })
}

export function getUserGame() {
    return request({
        url: 'api/user-game',
        method: 'get'
    })
}