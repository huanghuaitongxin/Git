// react是核心文件，可以在webapp中使用，也可以在ReactNative中使用，和vue一样
import React from "react" 
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件

import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import {Provider} from "react-redux"
import store from "./store"


// 把App组件渲染到页面
ReactDOM.render(<Provider store={store}>
<Counter1></Counter1>
<hr/>
<Counter2></Counter2>
</Provider>,window.app);

