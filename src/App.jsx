import React from 'react';
import Hello from './components/Hello';


class App extends React.Component {


  render() {
    return (
      <div>
       <Hello login='Toto'/>
       <Hello login='Chips'/>
      </div>
    )
  }
}

export default App