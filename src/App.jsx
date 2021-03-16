import React from 'react';


class App extends React.Component {

    handleClick = (message) => {
      console.log(message);
    }


  formatUser = (user) => {
    return user.firstName + " " + user.lastName
  }

  render() {
    return (
      <button onClick={() => this.handleClick("CLICK")}>
        Click me!
      </button>
    )
  }
}

export default App