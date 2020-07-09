/**
 * 该文件用于解决开发过程中遇到的跨域问题
 * 通常来说，同时在本地运行前端和服务端项目时，有两种解决方案
 * 1.前端可以通过如下方式设置客户端代理
 * 2.后端使用koa-cors中间件
 * 
 * 当使用koa-cors无果时，开始尝试使用devServer.proxy设置客户端代理，但最后仍然无果！
 * 
 * 本文件是前端解决跨域的一次尝试。但是最后发现问题并非在于前端或后端的跨域处理不到位，而是
 * 
 * 请求的URL没有包含 'http://' 协议段，由于协议不同，被浏览器阻止掉了！
 */

// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:3000'
//         // {
//         //     '/getCaptcha': 'http://localhost:3000/getCaptcha'
//         // }
//     }
// }


module.exports = {
    // 取消ESlint语法检查，烦死了
    lintOnSave: false
}