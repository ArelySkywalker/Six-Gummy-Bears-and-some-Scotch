import React, { Component } from "react";

class Card extends Component {
	render() {
		return (
			<div className="Card">
				<img src={ this.props.image } alt={ this.props.name } />
				<h3>{ this.props.name }</h3>
			</div>
		);
	}
}

export default Card;