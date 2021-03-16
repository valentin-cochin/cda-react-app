import React from 'react';


class App extends React.Component {
  render() {
    const arr = [1, 2, 3]

    return (
      <div>
        {
          arr.map((number, i) => {
            return (
              <h2 key={i}>{number}</h2>
            )
          })
        }
      </div>
    )
  }
}

export default App