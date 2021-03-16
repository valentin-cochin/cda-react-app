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
    const { user } = this.state
    return (
      <div>
        <Hello
          user={user}
          formatUser={this.formatUser}
        />
      </div>
    )
  }
}

export default App