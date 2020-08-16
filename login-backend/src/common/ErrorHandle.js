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
            throw err;
        }
    });
}