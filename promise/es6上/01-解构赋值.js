// 解构赋值 解开 结构 赋值
// let [a,b,c] = [1,2,3]
// console.log(a,b,c) //1 2 3

// let [,b,c] = [1,2,3]
// console.log(b,c)  //2 3

// ...args剩余运算符
// let [a,...args] = [1,2,3,4]
// console.log(a,args) //1 [ 2, 3, 4 ]

// 展开运算符
// let arr = [1,2,3]
// let newArr = [...arr]
// console.log(newArr) //[ 1, 2, 3 ]
// 结构不一样
// let {a,b,c} = [1,2,3]
// console.log(a,b,c) //undefined undefined undefined
// 结构赋值可以得到隐形的属性，两侧的结构可以不一样
// let {length} = [1,2,3]
// console.log(length) //3

// 如果是对象，赋值结构要保证key一样
// let {a,b} = {name:"wangcai",age:100}
// console.log(a,b) //undefined undefined

// let {name,age} = {name:"wangcai",age:100}
// console.log(name,age) //wangcai 100

//给key起一个别名
// let {name:a,age:b} = {name:"wangcai",age:100}
// console.log(a)//wangcai
// console.log(b)//100