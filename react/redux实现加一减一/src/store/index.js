import {createStore,applyMiddleware} from "redux"
import reducer from "../reduces/index"
//引入redux-thunk中间件，让他来处理异步的action
import thunkMiddleware from "redux-thunk"

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)


//初始化状态
const state={
    counter:99
}

//创建一个仓库
const store = createStoreWithMiddleware(reducer,state)

//导出一个仓库
export default store