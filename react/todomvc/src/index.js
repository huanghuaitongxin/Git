// react是核心文件，可以在webapp中使用，也可以在ReactNative中使用，和vue一样
import React from "react" 
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件
import App from "./App"

// 把App组件渲染到页面
ReactDOM.render(<App></App>,document.getElementById("app"));

