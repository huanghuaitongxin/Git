//如果你绑定一个actioncreator，内部还是dispatch
//实现真正的绑定
function bindActionCreators(actionCreator,dispatch){
    return function(...args){
        return dispatch(actionCreator(...args))
    }
}

//判断传递过来的是一个函数还是一个对象
export default function(actionCreator,dispatch){
    if(typeof actionCreator == "function"){
        //如果是函数，直接调用绑定的函数
        return bindActionCreators(actionCreator,dispatch)
    }
    //如果是对象，循环对象挨个绑定，绑定后都放到一个新的对象，最后把新对象返回
    const boundActionCreators = {};
    for(let key in actionCreator){
        boundActionCreators[key] = bindActionCreators(actionCreator[key],dispatch)
    }
    return boundActionCreators;
}