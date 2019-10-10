const http = require("http")
const querystring = require("querystring")
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
        res.setHeader('set-Cookie',arr)
    }
    req.getCookie = function(key){
        let obj = querystring.parse(req.headers.cookie,"; ");
        return obj[key]
    }
    if(req.url === "/write"){
        //种植多个cookie
    // res.setCookie("name","wangcai1")
    // res.setCookie("age","100")
    res.end("write ok ~")
    return
    }
    if(req.url === "/read"){
        res.end(req.getCookie("age") || 'empty')
    }
    if(req.url === "/visit"){
        res.setHeader("Content-type","text/plain; charset=utf-8")
        let visit = req.getCookie("visit")
        if(visit){
            visit = visit-0+1
            res.setCookie("visit",visit+"",{httpOnly:true})
        }else{
            visit = 1;
            res.setCookie("visit","1",{httpOnly:true})
        }
        res.end(`当前第${visit}次访问`)
    }
}).listen(3000);
