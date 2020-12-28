import axios from 'axios'

// export function request(config, success, failure) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'https://autumnfish.cn',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//         .then(res => {
//             // console.log(res);
//             success(res)
//         })
//         .catch(err => {
//             // console.log(err);
//             failure(err)
//         })
// }

// export function request(config) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'https://autumnfish.cn',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig)
//         .then(res => {
//             // console.log(res);
//             config.success(res)
//         })
//         .catch(err => {
//             // console.log(err);
//             config.failure(err)
//         })
// }

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'https://autumnfish.cn',
//             timeout: 5000
//         })
//         // 发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'https://autumnfish.cn',
        timeout: 5000
    })
    // 2.拦截器
    instance.interceptors.request.use(aaa => {
        console.log(aaa);
        // 1.比如aaa中一些信息不符合服务器要求
        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
        return aaa
    }, err => {
        console.log(err);
    })
    // instance.interceptors.response


    // 3.发送真正的网络请求
    return instance(config)
}