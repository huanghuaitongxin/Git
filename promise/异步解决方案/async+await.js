let fs = require("fs").promises
// let co = require("co")
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

// async function read(){
//     let res = await fs.readFile("./name.txt","utf-8")
//     let res2 = await fs.readFile(res,"utf-8")
//     return res2
// }
// read().then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

//通常await后面是跟上一个普通值，它会包装成Promise
async function read(){
    let res = await "hello"
    return res
}
read().then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})