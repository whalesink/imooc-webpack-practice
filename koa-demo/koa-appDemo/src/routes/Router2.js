// 引入中间件
const Router = require('koa-router');
const a2 = require('../api/app2');


const router = new Router();

router.get('/app2', a2);

// 导出这个路由实例
module.exports = router;