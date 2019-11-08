// function Animal(){
//     this.type = "狗类"
// }   //这是一个普通的构造器
// // p是一个对象 new一个构造器就创建出一个对象
// let a = new Animal()
// console.log(a.type)

// function Person(){
//     this.name="hello"
// }

// let p1 = new Person
// console.log(p1)

function Person(name){
    this.name = name
}
// 公有的属性都是定义在原型上
Person.prototype.say = function(){
    console.log("say...")
}
let a = new Person("wangcai")
// console.log(a)
// console.log(a.name)
// a.say()
// hasOwnProperty判断实例属性
// console.log(a.hasOwnProperty("name"))
// console.log(a.hasOwnProperty("say"))
console.log(a.__proto__ === Person.prototype)
console.log(a.__proto__.hasOwnProperty("say"))
console.log(a.constructor === a.__proto__.constructor)