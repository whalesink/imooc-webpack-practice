export default (ctx, next) => {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            // ctx.body = 'Protected resource, use Authorization header to get access\n';
            ctx.body = {
                code: 401,
                message: 'Protected resource, use Authorization header to get access\n'
            }
        } else {
            // throw err;
            ctx.status = err.status || 500;
            // 非开发模式下不输出stack信息
            // ctx.body = Object.assign({
            //     code: 500,
            //     msg: err.message
            // }, process.env.NODE_ENV ===　"development" ? { stack: err.stack} : {});
            ctx.body = {
                code: 500,
                msg: err.message,
                stack: err.stack
            }
        }
    });
}