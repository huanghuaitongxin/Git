import {combineReducers} from "redux"
import counter from "./counter"

//reducer表示把多个reducer合并成一个reducer
const reducer = combineReducers({
    counter
})

export default reducer;