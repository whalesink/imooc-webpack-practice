import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Utils'
import User from '../model/User'

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

        // console.log(body);
        // 检查图片验证码的时效性和正确性
        // console.log(' ?'+checkCode(sid, code));
        if (await checkCode(sid, code)) {
            // 验证用户名密码
            let checkUserPasswd = ''

            // mongoDB查库
            let user = await User.findOne({ username: body.username });
            console.log('mongo user'+user);
            if (!user) {
                ctx.body = {
                    code: 403,
                    msg: '用户名或者密码错误'
                }
                return
            }

            // console.log(user.password);
            if (user.password === body.password) {
                checkUserPasswd = true
            }

            if (checkUserPasswd) {
                // 验证通过 返回token1·
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
                    message: 'login success'
                }
            } else {
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