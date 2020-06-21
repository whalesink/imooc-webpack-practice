const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: { children: false }  // 关闭webpack的日志输出
});