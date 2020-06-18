import cbr from 'koa-combine-routers'
import demoRouter from './demoRouter'



export default cbr(
    demoRouter
);
