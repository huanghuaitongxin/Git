let fs = require("fs")
function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf8",function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })
}
// then的链式调用  上一个.then要返回一个promise
// read("./name.txt")
// .then(data=>{return read(data)},null)
// .then(data=>{console.log(data)},null);

// 上面说，上一个.then需要返回一个promise
// 但是我们返回了一个123,在内部会把返回的123写成Promise.resolve(123)
// read("./name.txt")
// .then(data=>{return 123},null)
// .then(data=>{console.log(data)},null);

// read("./name.txt")
// .then(data=>{return "hello"},null)
// .then(data=>{return data},null)
// .then(data=>{return data},null)
// .then(data=>{return data},null)
// .then(data=>{return data},null)
// .then(data=>{console.log(data)},null);

// read("./name.txt").then(data=>{
//     return read(data+"hahaha")
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
//     // return new Promise(()=>{})
// },err=>{
//     console.log(err)
//      返回一个处于pending状态的promise
//     return new Promise(()=>{})
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })


read("./name.txt").then(data=>{
    return read(data+"hahaha")
},err=>{
    console.log(err)
}).then(data=>{
    console.log(data)
    // return new Promise(()=>{})
},err=>{
    console.log(err)
    // 返回一个处于pending状态的promise
    return false
}).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
}).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})