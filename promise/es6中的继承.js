// // es6中class的基本使用
// class Animal{
//     // es6中提供了class
//     constructor(name){
//         // 叫实例属性
//         this.name = name
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.name)

//es6模拟抽象类
// class Animal{
//     constructor(name){
//         if(new.target === Animal){
//             throw new Error("Animal不能new")
//         }
//         // 叫实例属性
//         this.name = name
//     }
// }

// let a = new Animal("wangcai")
// console.log(a.name)

// 定义公有属性 就是原型上面的属性
// class Aniaml{
//     // age = 1000;
//     constructor(name){
//         this.name = name
//     }
//     say(){
//         console.log("say...")
//     }
// }
// let a = new Aniaml("wagncai")
// console.log(a.age)
// console.log(a.hasOwnProperty("name"))
// console.log(a.hasOwnProperty("say"))

// 访问器
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     // 访问器 访问器也是公有属性
//     get age(){
//         return 100
//     }
// }

// let a = new Animal("wangcai")
// console.log(a.age)  //使用时当成属性来使用

// // 静态属性
// class Animal {
//     static a = 110;
//     constructor(name) {
//         this.name = name;
//     }
//     get age() {
//         return 666
//     }
// }
// let a = new Animal("wangcai")
// console.log(Animal.a)

// ------------es6中的继承
class Animal{
    constructor(name){
        this.name = name
    }
    say(){
        console.log("say...")
    }
}
class Dog extends Animal{
    constructor(a){
        super(a) //显示调用父中的constructor
        this.age = a
    }
}
let d = new Dog( 1,"wangaci")
// d.say()
console.log(d.age)