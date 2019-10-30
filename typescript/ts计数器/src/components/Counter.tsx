import * as React from 'react'
import {connect} from "react-redux"
import {Store} from "../store/types"
import * as actions from "../store/actions"
interface Props{
    number:number,
    increment:any,
    decrement:any
}

class Counter extends React.Component<Props>{
    render(){
        const {number,increment,decrement} = this.props
        return(
            <div>
                <p>{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps = function(state:Store){
    return state
}
export default connect(mapStateToProps,actions)(Counter)