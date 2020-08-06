// 封装axios请求，返回封装的数据格式
// 错误统一处理
import axios from 'axios'
import errorHandle from './errorHandle'
import config from '@/config'

class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    // 获取axios实例的配置
    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            timeout: 10000
        }
        return config;
    }

    // 设定拦截器
    interceptors(instance) {
        // 请求拦截器
        instance.interceptors.request.use((config) => {
            // Do something before request is sent
            // console.log(config);
            return config;
        }, (error) => {
            // Do something with request error
            errorHandle(error);
            return Promise.reject(error);
        });

        // 响应拦截器
        instance.interceptors.response.use((res) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            // console.log(res);
            if (res.status === 200) {
                return Promise.resolve(res.data)
            } else {
                return Promise.reject(res)
            }
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            errorHandle(error);
            return Promise.reject(error);
        });
    }

    // 创建实例
    request(options) {
        const instance = axios.create()
        const newOptions = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        // 等价于 instance.request(newOptions)
        return instance(newOptions)
    }

    get(url, config){
        const options = Object.assign({
            method: 'get',
            url: url
        }, config)
        return this.request(options)
    }

    post(url, data){
        return this.request({
            method: 'post',
            url: url,
            data: data
        })
    }
}

const instance = axios.create({

});


export default HttpRequest