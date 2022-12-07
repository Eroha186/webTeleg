import request from "@/utils/request";

export function login(userInfo) {
    return request({
        url: 'api/login',
        method: 'post',
        data: userInfo
    })
}