import React, { Component } from 'react';
import Category from './Category';

class Table extends Component {
    render() {
        const  { categories } = this.props
        return (
            <div className="jumbotron col-12 col-lg-8 shadow-sm my-5">
                <div className="row">
                    <div className="col-6 text-left h3">
                        Name
                    </div>
                    <div className="col-6 text-right h3">
                        Price
                    </div>
                </div>
                <div className="row">
                    {
                        categories.map((category, i) => {
                            return <Category key={ i } category={ category } />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Table;