import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
        <div className="Ingredient col-lg-4 col-md-6 col-sm-12" style={ {backgroundImage: `url(${this.props.image})`} }>
                <h1>{ this.props.name }</h1>
            </div>
        );
    }
}

export default Ingredient;