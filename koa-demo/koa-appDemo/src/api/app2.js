// 这里是模拟一个业务接口，即接口内部的实现逻辑
function app2(ctx){
    ctx.body = {
        "message": "hello app2"
    }
}

// 导出模块
module.exports = app2;