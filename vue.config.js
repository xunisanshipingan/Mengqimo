const path = require('path') 
module.exports = {
    publicPath: '/Blog/',
    pluginOptions :{
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "./src/assets/css/global.less")] // 引入全局样式变量
        }
    }
}