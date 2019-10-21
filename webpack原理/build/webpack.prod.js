var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode:"production",
    optimization:{
        minimizer:[
            // 配置各种压缩方案，当使用OptimizeCssAssetsPlugin压缩了css，那么js不压缩了，需要我们手动压缩
            new OptimizeCssAssetsPlugin(),  // 把css压缩
            new TerserPlugin()  // 手动去压缩一个js
        ]
    }
}