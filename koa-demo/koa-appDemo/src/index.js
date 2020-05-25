// js入口文件
// const Koa = require('koa');
// const statics = require('koa-static');
// const path = require('path');
// const router = require('./routes/routes');
import Koa from 'koa';
import statics from 'koa-static';
import path from 'path';
import router from './routes/routes';

const app = new Koa();

app.use(router());
app.use(statics(path.join(__dirname, '../public')));
app.listen(3000);