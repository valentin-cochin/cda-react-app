import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="col-12 d-flex justify-content-between">
                <div className="col-6 text-left">
                    { item.name }
                </div>
                <div className="col-6 text-right">
                    { item.price }
                </div>
            </div>
        );
    }
}

export default Item;