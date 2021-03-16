import React from 'react';
import Hello from './components/Hello';


class App extends React.Component {

  state = {
    login : 'Jean'
  }

  render() {
    return (
      <div>
       <Hello login='Toto'/>
       <Hello login={this.state.login}/>
      </div>
    )
  }
}

export default App