import React, { Component } from 'react';

class Logout extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
            Déconnexion
          </button>
        );
    }
}

export default Logout;