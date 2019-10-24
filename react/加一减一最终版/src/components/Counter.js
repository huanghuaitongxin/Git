import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>0</p>
                <button>+</button>
                <button>-</button>
            </div>
        );
    }
}

export default Counter;