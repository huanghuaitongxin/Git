// react是核心文件，可以在webapp中使用，也可以在ReactNative中使用，和vue一样
import React from "react" 
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件
import App from "./App"
import {Provider} from "react-redux"
import store from "./store"


// 把App组件渲染到页面
ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById("app"));

