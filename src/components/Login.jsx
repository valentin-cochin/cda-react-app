import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Connexion
            </button>
        );
    }
}

export default Login;