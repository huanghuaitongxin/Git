import React, { Component } from 'react';
import actions from "../store/actions/counter2"
import {connect} from "react-redux"

class Counter2 extends Component {
    render() {
        return (
            <div>
                <h1>Counter2</h1>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment(5)}>+</button>
                <button onClick={()=>this.props.decrement(5)}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state=>({number:state.counter2.number})
export default connect(mapStateToProps,actions)(Counter2);