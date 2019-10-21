import React, { Component } from 'react';

class Children extends Component {
    render() {
        return (
            <div>
                <span>{this.props.age}</span>
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default Children;