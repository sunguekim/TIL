import React, { Component } from 'react';


class Study extends Component {


    state = { n1: 10, n2: 20 }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ n1: this.state.n1 + 1 })}>{this.state.n1}</button>
            </div>
        );
    }
}



export default Study;
