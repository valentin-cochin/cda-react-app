import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Toto',
    }
    console.log('CONSTRUCTOR')
  }

  componentDidMount(){
    this.setState({name : 'Titi'})
  }

  render() {
    console.log('RENDER')
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

export default App