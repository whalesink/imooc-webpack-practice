const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

router.prefix('/api');

/**定义一个用户接口，满足如下需求：
 * 1. 接收一个json数据如 ：{name: "imooc", email: "imooc@test.com"}
 * 2. json中无name或者email 的返回如 {code: 404, msg: "name或email不得为空"}
 * 3. 用户端需要传递Header，其中没有role属性或role不为admin，返回如 {code: 401, msg:"unauthorized post request"}
 * 4. 上述条件满足时的返回如 {code:200, data:{name, email},msg:"success"}
 */
router.post('/user', ctx => {
    const header = ctx.request.header,
          b = ctx.request.body;
          
    // 初始化响应体
    let res = {
        code: 200,
        // data: b,
        msg: 'success'
    };

    console.log(b);
    if(header.role !== 'admin'){
        res.code = 401;
        res.msg = 'unauthorized post request'
        ctx.body = res;
        return;
    }

    if((!b.name) || (!b.email)){
        res.code = 404;
        res.msg = 'name或email不得为空'
        ctx.body = res;
        return;
    }

    res.data = b;
    ctx.body = res;
});

// 为应用添加中间件
app.use(koaBody());         // 为ctx对象添加了body对象
app.use(router.routes())    // 所有路由
    .use(router.allowedMethods());

// 将应用绑定到3000端口
app.listen(3000);