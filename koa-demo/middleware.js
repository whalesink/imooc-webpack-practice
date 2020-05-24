import Koa from 'koa';
const app = new Koa();

const middleware = function async(ctx, next){
    console.log('this is a middleware!');
    console.log(ctx.request.path);
    next();
}

const middleware2 = function async(ctx, next){
    console.log('this is a middleware2!');
    console.log(ctx.request.path);
    next();
}

const middleware3 = function async(ctx, next){
    console.log('this is a middleware3!');
    console.log(ctx.request.path);
    next();
}

app.use(middleware);
app.use(middleware2);
app.use(middleware3);

app.listen(3000);