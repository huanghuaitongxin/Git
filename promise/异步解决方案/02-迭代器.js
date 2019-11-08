//interator:迭代器
// 是一个对象，对象中有一个next函数，函数返回一个对象，返回的对象里有一个value有一个done
function createIterator(items){
    let i = 0;
    return{
        next:function(){
            var done = (i>=items.length)
            var value = !done ? items[i++] : undefined
            return{
                value:value,
                done:done
            }
        }
    }
}
const colors = ["red","green","blue"];
// 返回一个迭代器 iterator 是一个对象
let iterator = createIterator(colors)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())