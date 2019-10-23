import React, { Component } from 'react';
import Counter from './containers/Counter'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div>
                <Counter></Counter>
            </div>
        );
    }
}

export default App;