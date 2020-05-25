const cbr = require('koa-combine-routers');

const aRoutes = require('./Router1');
const bRoutes = require('./Router2');

module.exports = cbr(
    aRoutes, 
    bRoutes
);
