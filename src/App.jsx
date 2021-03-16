import React from 'react';
import Hello from './components/Hello';


class App extends React.Component {

  state = {
    user: {
      firstName: 'Jean',
      lastName: 'Dupond'
    }
  }

  formatUser = (user) => {
    return user.firstName + " " + user.lastName
  }

  render() {
    return (
      <div>
        <Hello
          user={this.state.user}
          formatUser={this.formatUser}
        />
      </div>
    )
  }
}

export default App