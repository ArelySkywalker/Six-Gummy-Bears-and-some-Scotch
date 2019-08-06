import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
        <div className={ `Ingredient col-lg-4 col-md-6 col-sm-12 ${ this.props.name }` } style={ { backgroundImage: `url(${ this.props.image })` } }>
            <div className="inner">
                <h1>{ this.props.name }</h1>
            </div>        
        </div>
        );
    }
}

export default Ingredient;