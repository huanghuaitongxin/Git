// Set里面存储的任何东西 里面的数据是唯一的

// 创建一个Set
// let set = new Set()
// console.log(set) //空的Set {}

// 创建一个有内容的Set
// let set = new Set([1,2,3])
// console.log(set) //Set { 1, 2, 3 }

// 创建一个存储任何值的Set
// let s = new Set([1,2,"hello",undefined,null,function(){}])
// console.log(s) //Set { 1, 2, 'hello', undefined, null, [Function] }

//Set中不能存储相同的值
// let s = new Set([1,2,3,3,4,4,5])
// console.log(s) //Set { 1, 2, 3, 4, 5 }

// Set中的api
let s = new Set([1,2,3])
s.add(8)
console.log(s) //Set { 1, 2, 3, 8 }
s.delete(1)
console.log(s)
s.clear(s)
console.log(s)
