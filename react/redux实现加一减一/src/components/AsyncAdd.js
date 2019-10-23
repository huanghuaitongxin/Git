import React, { Component } from 'react';

class AsyncAdd extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.incrementAsync()}>async+</button>
            </div>
        );
    }
}

export default AsyncAdd;