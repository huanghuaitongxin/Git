import React, { Component } from 'react';

class Show extends Component {
    render() {
        return (
            <div>
                <h3>counter:{this.props.counter}</h3>
            </div>
        );
    }
}

export default Show;