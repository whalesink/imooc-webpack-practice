import cbr from 'koa-combine-routers'
import publicRouter from './publicRouter'
import loginRouter from './loginRouter'


export default cbr(
    publicRouter,
    loginRouter
);
