import svgCaptcha from 'svg-captcha';

class PublicController{
    constructor(){

    }

    async getCaptcha(ctx){
        const newCaptcha = svgCaptcha.create({
            // 字符串长度
            size: 4,
            // 噪点值
            noise: Math.floor(Math.random() * 4),
            color: true,
            background: '#DDD'
        });
        console.log(newCaptcha.text);
        ctx.body = {
            code: 200,
            data: newCaptcha.data
        }
    }
}


export default new PublicController()