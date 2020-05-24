// import Koa from 'koa'
// import Router from 'koa-router'
// import cors from '@koa/cors'
// import koaBody from 'koa-body'

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');


const app = new Koa();
const router = new Router();

router.prefix('/user');
// 接口前缀，所有接口访问如 localhost:3000/user/api1 才会得到正常响应

router.get('/api1', ctx => {
    // console.log(ctx.request);
    const params = ctx.request.query;
    console.log(params);
    ctx.body = '你调用了api1。';
});

router.get('/async', async (ctx) => {
    // 这里会等待内部的promise产生结果后再执行下面的内容
    let result = await new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('hello world 2s later!!')
        }, 2000);
    });
    ctx.body = result;
});

router.post('/post1', async (ctx) =>{
    let {body} = ctx.request;
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        body
    };
});

app.use(koaBody());
app.use(cors());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);