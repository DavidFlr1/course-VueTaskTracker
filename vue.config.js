module.exports = {
    publicPath: '/course-VueTaskTracker/',
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/'},
            },
        }
    }
}