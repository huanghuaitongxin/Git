// function deepClone(obj){
//     if(obj == null) return obj;
//     if(typeof obj !== "object") return obj;
//     if(obj instanceof Date) return new Date(obj)
//     let newObj = new obj.constructor
//     for(let key in obj){
//         newObj[key] = obj[key]
//     }
//     return newObj
// }
// let obj = {name:"wangcai",age:100}
// let newObj = deepClone(obj)
// console.log(newObj)
// newObj.age = 666
// console.log(obj)
// console.log(newObj)

let a = {name:"wangcai",age:100}
for(key in a){
    console.log(key)    
    console.log(a[key])    

}