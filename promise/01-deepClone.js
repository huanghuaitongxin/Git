// 深copy
function deepClone(obj){
    if(obj == null) return obj;
    if(typeof obj !== "object") return obj;
    if(obj instanceof Date) return new Date(obj)
    let newObj = new obj.constructor
    console.log(newObj)
}

// let obj = [1,2,3]
// let newObj = deepClone(obj)

// let a;
// let b = null
// console.log(a == b)

let a = {}
console.log(typeof a)