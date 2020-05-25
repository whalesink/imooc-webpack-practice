// 引入中间件
const Router = require('koa-router');

// 导入模块app1
const a = require('../api/app1');

// 实例化Router对象
const router = new Router();

// 接口的方法，业务在a内部
router.get('/app1', a);

// 导出这个路由实例
module.exports = router;