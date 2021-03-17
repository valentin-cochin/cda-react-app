import React, { Component } from 'react';
import Item from './Item';

class Category extends Component {
    render() {
        const { category } = this.props
        return (
            <>
                {
                    category.items.map((item, i) => {
                        return <Item key={ i } item={ item } />
                    })
                }
            </>
        );
    }
}

export default Category;