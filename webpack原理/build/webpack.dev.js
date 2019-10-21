const path = require("path")
module.exports={
    mode:"development",
    devServer:{//开发环境服务器
        port:3000,//配置端口
        compress:true,//gzip
        contentBase:path.resolve(__dirname,"../dist")//webpack启动的服务会在dist
    }
}