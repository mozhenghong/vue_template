// vue.config.js
module.exports = {
    devServer: {
        proxy: { //设置代理
            '/api': {
                target: 'http://127.0.0.1:8888'
            }
        }
    }
}