import React from 'react';


class App extends React.Component {

  formatUser = (user) => {
    return user.firstName + " " + user.lastName
  }

  render() {
    const user = {
      firstName: 'Toto',
      lastName: 'Dupond'
    }

    return (
      <div>
        <h1>Hello {this.formatUser(user)}</h1>
      </div>
    )
  }
}

export default App