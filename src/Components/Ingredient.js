import React, { Component } from 'react';

class Ingredient extends Component {
	render() {
		return (
			<a href={ this.props.link }>
				<div className={ `Ingredient ${ this.props.name }` } style={ { backgroundImage: `url(${ this.props.image })` } }>
					<div className="inner">
						<h1>{ this.props.name }</h1>
						<p>view recipes</p>
					</div>
				</div>
			</a>
		);
	}
}

export default Ingredient;