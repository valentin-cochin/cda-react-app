import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.login}</h1>
            </div>
        );
    }
}

export default Hello;