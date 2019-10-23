import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.increment()}>+</button>
            </div>
        );
    }
}

export default Add;