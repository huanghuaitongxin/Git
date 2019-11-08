// let fs = require("fs").promises
// let co = require("co");
// function* read(){
//     let res = yield fs.readFile("./name.txt","utf-8")
//     let res2 = yield fs.readFile(res,"utf-8")
//     return res2
// }
// co(read).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })
let fs = require("fs").promises
function*read(){
    let res = yield fs.readFile("./name.txt","utf-8")
    yield fs.readFile(res,"utf-8")
}

let it = read()

let {value,done} = it.next()
Promise.resolve(value).then(data=>{
    let {value,done} = it.next(data)
    Promise.resolve(value).then(data=>{
        console.log(data)
    })
})