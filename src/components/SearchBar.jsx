import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="col-12 col-lg-8">
                <div className="row">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <input type="checkbox" className="align-self-center mr-2" aria-label="Checkbox for following text input"></input>
                    <small id="emailHelp" className="form-text text-muted mt-0">Only show products in stock</small>
                </div>
            </div>
        );
    }
}

export default SearchBar;