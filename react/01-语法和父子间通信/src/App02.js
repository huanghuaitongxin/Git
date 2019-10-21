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
        <h1>父组件</h1>
        <Children age="100" name={this.state.name}></Children>
      </>
    )
  }
}

export default App