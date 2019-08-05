import React, { Component } from "react";

class Card extends Component {
	render() {
		return (
			<div className="Card col-lg-4">
				<div className="inner">
					<img src={ this.props.image } alt={ this.props.name } />
					<h3>{ this.props.name }</h3>
					<h5>Ingredients:</h5>
					<ul>
						{ this.props.ingredients && this.props.ingredients.map(function(ingredient, index) {
								return <li className="ingredient" key={`ingredient-${index}`}>{ ingredient }</li>
							}
						)}
					</ul>
					<h5>Measurements:</h5>
					<ul>
						{ this.props.measurements && this.props.measurements.map(function(measurement, index) {
								return <li className="measurement" key={`measurement-${index}`}>{ measurement }</li>
							}
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Card;