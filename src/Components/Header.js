import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="row">
					<div className="col-8 Nav-icon">
						<a href="/">
							<i className="fas fa-cocktail"></i>
							<h1>Recipes</h1>
						</a>
					</div>
					<div className="col-4 Title">
						<i className="fas fa-bars"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;