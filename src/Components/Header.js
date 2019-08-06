import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="row">
					<div className="col-lg-8 Nav-icon">
						<i className="fas fa-cocktail"></i>
						<h1>Recipes</h1>
					</div>
					<div className="col-lg-4 Title">
						<i className="fas fa-bars"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;