
let Promise = require("./promise")
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("包")
        // reject("没钱")
        // throw new Error("没钱...")
    })
})
promise.then((data)=>{
    console.log(data)
},err=>console.log(err))

// promise是为了解决异步 回调有嵌套问题
// 优点：优雅地解决异步问题，异步并发
// 缺点：内部也是基于回调的