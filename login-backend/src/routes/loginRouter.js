import Router from 'koa-router'
import loginController from '../api/LoginController'

const router = new Router()

router.prefix('/login')

// 登录
router.post('/login', loginController.login)

// 忘记密码
// router.post('/forget', loginController.forget)

export default router