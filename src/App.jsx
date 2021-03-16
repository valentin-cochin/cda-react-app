import React from 'react';


class App extends React.Component {

  // *Liste des component*
  // catégories
  // search avec checkbox
  // lignes de produit
  // Le conteneur

  state = {
    products: [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ]

  }

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