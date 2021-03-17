import React from 'react';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

class App extends React.Component {
  state = {
    categories: [
      {
        label: "Sporting Goods",
        items: [
          {
            name: "Football",
            price: "49.99"
          }, {
            name: "Baseball",
            price: "9.99"
          }, {
            name: "Basketball",
            price: "29.99"
          }
        ]
      }, {
        label: "Electronics",
        items: [
          {
            name: "iPod Touch",
            price: "99.99$"
          }, {
            name: "iPhone 5",
            price: "399.99$"
          }, {
            name: "Nexus 7",
            price: "199.99$"
          }
        ]
      }
    ]
  }

  render() {
    const { categories } = this.state
    return (
      <div className="container">
        <hr />
        <h1 className="text-center text-uppercase">exercice react</h1>
        <hr />
        <div className="row justify-content-center">
          <SearchBar />
          <Table categories={categories} />
        </div>
      </div>
    )
  }
}

export default App;