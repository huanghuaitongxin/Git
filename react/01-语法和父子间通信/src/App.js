import React from 'react'
import Children from './Children'
//组件在react中分两类：class function JSX
//vue中的组件
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {   
      name:"wangcai"                              
    }
  }
  render(){
    return(
      <>
        <input value={this.state.name} onChange={this.f1.bind(this)} />
        <h1>{this.state.name}</h1>
      </>
    )
  }
  f1(e){
    this.setState({
      name:e.target.value
    })
  }
}

export default App