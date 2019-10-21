import React from 'react'

//组件在react中分两类：class function JSX
//vue中的组件
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:"wangcai",
      age:100                                   
    }
  }
  render(){
    return(
      <>
        <h1>父组件</h1>
        <span>{this.state.name}</span>
        <span>{this.state.age}</span>
        <button onClick={this.f1.bind(this)}>修改name</button>
        <button onClick={this.f2.bind(this)}>修改age</button>
      </>
    )
  }
  f1(){
    this.setState({
      name:"xiaoqiang"
    })
  }
  f2(){
    this.setState({
      age:++this.state.age
    })
  }
}

export default App