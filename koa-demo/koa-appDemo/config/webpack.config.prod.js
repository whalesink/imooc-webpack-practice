const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const TerserWebpackPlugin = require('terser-webpack-plugin');

const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    stats: { children: false, warnings: false },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    parse: {},
                    compress: {
                        warnings: false,
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true
                    },
                    mangle: true,
                    output: {
                        comments: false,
                        beautify: false
                    }
                },
                parallel: true,
                sourceMap: false
            })
        ]
    }
});

module.exports = webpackConfig;