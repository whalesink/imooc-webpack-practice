// 引入中间件
import Router from 'koa-router'
import demoController from '../api/demoController';

// 实例化Router对象
const router = new Router();

// 接口的方法，业务在a内部
router.get('/demo', demoController.demo);

// 导出这个路由实例
export default router;