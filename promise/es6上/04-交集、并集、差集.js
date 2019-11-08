// ------------------>并集
// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// function union(arr1,arr2){
//     let s = new Set([...arr1,...arr2])
//     return [...s]
// }
// console.log(union(arr1,arr2))

// ------------------>交集
// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// function intersection(arr1,arr2){
//     let s1 = new Set(arr1)
//     let s2 = new Set(arr2)
//     return [...s1].filter(item=>{
//         return s2.has(item)
//     })
// }
// console.log(intersection(arr1,arr2))

// -------------------->差集
let arr1 = [1,2,3,4]
let arr2 = [3,4,5,6]
function difference(arr1,arr2){
    let s1 = new Set(arr1)
    let s2 = new Set(arr2)
    return [...s1].filter(item=>{
        return !s2.has(item)
    })
}
console.log(difference(arr1,arr2))