import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''

//http request 拦截器
// axios.interceptors.request.use(
//
// )


// res 拦截器 全局钩子
// axios.interceptors.response.use(res => {
//     if (typeof res.data !== 'object') {
//         return Promise.reject(res)
//     }
//     if (res.data.resultCode !== 200) {
//         if (res.data) {
//
//         }
//     }
//
// })

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                resolve(res.data)
            }, error => {
                reject(error)
            })
    })
}