const koa = require('koa');
const app = new koa();

app.use(async ctx => {
  // console.log(ctx.request);
  ctx.body = 'hello world!!';
});

app.listen(3000);