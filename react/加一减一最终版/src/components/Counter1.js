import React, { Component } from 'react';
import actions from "../store/actions/counter1"
import {connect} from "react-redux"

class Counter1 extends Component {
    render() {
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment(3)}>+</button>
                <button onClick={()=>this.props.decrement(6)}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state=>({number:state.counter1.number})
export default connect(mapStateToProps,actions)(Counter1);