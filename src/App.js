import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR')
  }

  componentDidMount() {
    console.log("DID_MOUNT")
  }

  render() {
    console.log('RENDER')
    return (
      <div>
        <h1>Hello </h1>
      </div>
    )
  }
}

export default App