import svgCaptcha from 'svg-captcha';
import { getVal, setVal, getHval } from '../config/RedisConfig'

class PublicController{
    constructor(){

    }

    async getCaptcha(ctx){
        // 获取到param
        const body = ctx.request.query
        // console.log(body.sid);

        const newCaptcha = svgCaptcha.create({
            // 字符串长度
            size: 4,
            // 噪点值
            noise: Math.floor(Math.random() * 4),
            color: true,
            background: '#DDD'
        });
        // console.log(newCaptcha.text);
        if (typeof body.sid === 'undefined') {
            ctx.body = {
              code: 500,
              msg: '参数不全！(sid)'
            }
            return
        }

        // 存入redis(验证码ID - 验证码) 并设置超时时间10min
        setVal(body.sid, newCaptcha.text, 10 * 60);

        ctx.body = {
            code: 200,
            data: newCaptcha.data
        }
    }
}


export default new PublicController()