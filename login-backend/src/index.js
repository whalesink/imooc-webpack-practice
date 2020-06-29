// js入口文件
// const Koa = require('koa');
// const statics = require('koa-static');
// const path = require('path');
// const router = require('./routes/routes');
import Koa from 'koa';
import statics from 'koa-static';
import koaBody from 'koa-body';
// import jsonutil from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import compress from 'koa-compress'
import path from 'path';
import router from './routes/routes';
import helmet from 'koa-helmet';

const app = new Koa();

const isDevMode = process.env.NODE_ENV === "production" ? false : true;


// before: 

// app.use(router());
// app.use(statics(path.join(__dirname, '../public')));
// app.use ...

// after: 使用koa-compose整合上述app.use
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    helmet()
]);

// 若是生产模式就压缩中间件
if(!isDevMode){
    app.use(compress())
}


app.use(middleware);
app.use(router());

app.listen(3000);
