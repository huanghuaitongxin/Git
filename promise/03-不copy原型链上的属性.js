function deepClone(obj){
    if(obj == null) return obj;
    if(typeof obj !== "object") return obj;
    if(obj instanceof Date) return new Date(obj);
    let newObj = new obj.constructor
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}

let obj = {name:"wangcai",age:{counter:100}}
let newObj = deepClone(obj)
obj.age.counter = 6666
console.log(obj)
console.log(newObj)

// { name: 'wangcai', age: { counter: 6666 } }
// { name: 'wangcai', age: { counter: 100 } }