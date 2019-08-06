import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class Ingredient extends Component {
	render() {
		return (
			<LazyLoad>
				<div className={ `Ingredient ${ this.props.name }` } style={ { backgroundImage: `url(${ this.props.image })` } }>
					<div className="inner">
						<h1>{ this.props.name }</h1>
						<p>view recipes</p>
					</div>
				</div>
			</LazyLoad>
		);
	}
}

export default Ingredient;