import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

// 1.axios的基本使用
// axios({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     methods: 'get'
// }).then(res => {
//     console.log(res);
// })

// axios({
//     // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
//     url: 'https://autumnfish.cn/api/joke/list',
//     // 专门针对get请求的参数拼接
//     params: {
//         num: 3
//     },
//     methods: 'get'
// }).then(res => {
//     console.log(res);
//     document.writeln('<h2>' + res.data.jokes[0] + '</h2>')
//     document.writeln('<h2>' + res.data.jokes[1] + '</h2>')
//     document.writeln('<h2>' + res.data.jokes[2] + '</h2>')
// })

// 2.axios发送并发请求
// axios.all([axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//     url: 'https://autumnfish.cn/api/joke/list',
//     params: {
//         num: 3
//     },
// })]).then(res => {
//     console.log(res)
// })

// 3.使用全局的axios和对应的配置进行网络请求
// axios.defaults.baseURL = 'https://autumnfish.cn'
// axios.defaults.timeout = 5000
// axios.all([axios({
//     url: '/search',
//     params: {
//         keywords: 'カタオモイ'
//     }
// }), axios({
//     url: '/song/url',
//     params: {
//         id: 431259256
//     },
// })]).then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
// }))

// 4.创建对应的axios实例
// const instance1 = axios.create({
//     baseURL: 'https://autumnfish.cn',
//     timeout: 5000
// })
//
// instance1({
//     url: '/search',
//     params: {
//         keywords: 'カタオモイ'
//     }
// }).then(res => {
//     console.log(res);
// })
//
// instance1({
//     url: '/song/url',
//     params: {
//         id: 1471767263
//     }
// }).then(res => {
//     console.log(res);
// })

// 5.封装request模块
import {request} from "./network/request";

// request({
//     url: '/song/url',
//     params: {
//         id: 1471767263
//     }
// }, res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })

// request({
//     baseConfig: {
//         url: '/song/url',
//         params: {
//             id: 1471767263
//         }
//     },
//     success(res) {
//         console.log(res);
//     },
//     failure(err) {
//         console.log(err);
//     }
// })

request({
    url: '/song/url',
    params: {
        id: 1471767263
    }
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})