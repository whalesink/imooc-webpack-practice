import cbr from 'koa-combine-routers'
import publicRouter from './publicRouter'



export default cbr(
    publicRouter
);
