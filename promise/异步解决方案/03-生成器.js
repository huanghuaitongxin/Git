//generator生成器 生成迭代器
// generator一般也是需要和promise配合使用
// generator yield产出
function* read(){
    yield "hello"
    yield "world"
}
// 调用generator返回一个迭代器
let it = read()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// 对象中放一个generator
let obj = {
    say:function(){

    },
    say1:function*(){

    },
    *say2(){
        
    }
}