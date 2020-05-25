const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello world~~';
});

router.get('/api1', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = '你调用了api1。';
});

// 这里定义了异步匿名函数函数
router.get('/async', async (ctx) => {

    // 这里会等待内部的promise产生结果后再执行下面的内容
    let result = await new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('hello world 2s later!!')
        }, 2000);
    });

    ctx.body = result;
});


// 将router实例上的方法添加到app中，作为中间件去处理
//      
app.use(router.routes())
    .use(router.allowedMethods());

console.log(router.routes());

app.listen(3000);


