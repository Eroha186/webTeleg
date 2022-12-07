import request from "@/utils/request";

export function loginApi(userInfo) {
    return request({
        url: 'api/login',
        method: 'post',
        data: userInfo
    })
}