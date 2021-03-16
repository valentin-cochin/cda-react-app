import React, { Component } from 'react';

class Hello extends Component {
    render() {
        const {user, formatUser} = this.props
        return (
            <div>
                <h1>Hello {formatUser(user)}</h1>
            </div>
        );
    }
}

export default Hello;