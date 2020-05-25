// 这里是模拟一个业务接口，即接口内部的实现逻辑
function app1(ctx){
    ctx.body = {
        "message": "hello from app1~~"
    }
}

// 导出模块,因为要作为回调函数使用，
// 所以这个模块必须是函数而不是对象
module.exports = app1;