export default function combineReducers(reducers){
    //一个reducer需要有两个参数，一个state，一个action
    //key是合并的状态树的属性名，值就是reducer
    return function(state={},action){
        let nextState = {};
        //reducer是一个对象，里面保存多个reducer
        for(let key in reducers){
            nextState[key] = reducers[key](state[key],action)
        }
        return nextState
    }
}