import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Utils'

class LoginController {
    constructor() { }

    /**
     * 1. 接受用户数据
     * 2. 验证图片验证码的时效性和正确性
     * 3. 验证用户账号密码是否正确
     * 4. 返回token
     */
    async login(ctx) {

        // 接受用户数据
        const { body } = ctx.request
        let sid = body.sid
        let code = body.code

        // 检查图片验证码的时效性和正确性
        if (checkCode(sid, code)) {
            // 验证用户名密码
            
            // mongoDB查库


            if (1) {
                // 验证通过 返回token
                let token = jsonwebtoken.sign({
                    _id: 'shio',
                    // exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
                }, config.JWT_SECRET, {
                    // token 过期时间： 1d
                    expiresIn: '1d'
                });

                ctx.body = {
                    code: 200,
                    token: token,
                    message: 'hello login'
                }
            }else{
                ctx.body = {
                    code: 402,
                    message: '用户名或密码错误！'
                }
            }

        } else {
            ctx.body = {
                code: 401,
                message: '验证码错误！'
            }
            return
        }



    }
}

export default new LoginController