const http = require("http")

http.createServer((req,res)=>{
    let arr = [];
    res.setCookie = function(key,value,options={}){
        let opts = [];
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        arr.push(`${key}=${value};${opts.join("; ")}`)
        res.setHeader('set-Cookie',arr);
    }
    if(req.url === "/write"){
        //种植多个cookie
    res.setCookie("name","wangcai1")
    res.end("write ok ~")
    return
    }
    if(req.url === "/read"){
        res.end(req.headers.cookie || 'empty')
    }
}).listen(3000);
