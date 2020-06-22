// 引入中间件
import Router from 'koa-router'
import PublicController from '../api/PublicController';

// 实例化Router对象
const router = new Router();

// 接口的方法，业务在a内部
router.get('/getCaptcha', PublicController.getCaptcha);

// 导出这个路由实例
export default router;