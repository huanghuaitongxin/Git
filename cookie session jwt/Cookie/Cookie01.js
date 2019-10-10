const http = require("http")

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcom ~")
    }
    if(req.url === "/write"){
        //种植多个cookie
    res.setHeader("Set-cookie",['name=wangcai','age=100'])
    res.end("write ok ~")
    return
    }
    if(req.url === "/read"){
        res.end(req.headers.cookie || 'empty')
    }
}).listen(3000);
