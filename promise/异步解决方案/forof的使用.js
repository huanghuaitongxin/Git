// for of是用来循环的，使用forof必须要求你循环的对象有一个迭代器
// 在js中，数组，set，map都是iterable对象，可以使用forof进行迭代
// let colors = ["red","green","blue"];
// console.dir(colors)
// for(value of colors){
//     console.log(value)
// }
// 要使用for of前提是这个集合是可迭代的
// 伪数组是一个对象
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// let realArray = [...obj]
// console.log(Array.isArray(realArray))

// Array.from可以把一个不是iterable的伪数组变成真实数据
let obj = {
    0:"a",
    1:"b",
    [Symbol.iterator](){
        let index = 0;
        return {
            next:()=>{
                return{
                    value:this[index],
                    done:this.length === index++
                }
            }
        }
    },
    length:2
}
let realArray = [...obj]
console.log(realArray)
console.log(Array.isArray(realArray))