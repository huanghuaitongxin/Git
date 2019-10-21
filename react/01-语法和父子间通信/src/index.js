// react是核心文件，可以在webapp中使用，也可以在ReactNative中使用，和vue一样
import React from "react" 
// react-dom专门针对webapp
import ReactDOM from "react-dom"
// 引入根组件
import App from "./App"

// 把App组件渲染到页面
ReactDOM.render(<App></App>,document.getElementById("app"));

//react可以直接把一个字符串直接渲染到页面上
// ReactDOM.render("hello",document.getElementById("app"))

//jsx中必须有一个跟标签
// let ele = <div><h1>hello world</h1></div>
// ReactDOM.render(ele,document.getElementById("app"))

//vue中v-if v-for react中没有指令
// let res = "";
// let islogin = false;
// if(islogin){
//     res = <h1>登陆成功</h1>
// }else{
//     res = <h1>登陆失败</h1>
// }

// let ele = <div>{res}</div>
// ReactDOM.render(ele,document.getElementById("app"))

// let books = ["vue.js","react.js","angular.js"];
// let ele = <ul>{books.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
// ReactDOM.render(ele,document.getElementById("app"))

//写行内样式，需要把样式当成一个对象，是一个对象，属性js代码，需要放到{}
// let ele = <div style={{"color":"red"}}>hello</div>
// ReactDOM.render(ele,document.getElementById("app"))

// class  ---> className 
// for ----> htmlFor 
// let ele = <div class="box">hello</div>
// let ele = <div className="box">hello</div>
// ReactDOM.render(ele,document.getElementById("app"));
