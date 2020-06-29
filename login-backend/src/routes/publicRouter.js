// 引入中间件
import Router from 'koa-router'
import PublicController from '../api/PublicController';

// 实例化Router对象
const router = new Router();

router.get('/getCaptcha', PublicController.getCaptcha);

// 导出这个路由实例
export default router;