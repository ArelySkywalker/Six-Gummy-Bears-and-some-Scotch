import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
	state = { showing: false };
	render() {
		const { showing } = this.state;
		return (
			<div className={ `Header${ showing ? ' open' : '' }` }>
				<div className="row">
					<div className="col-8 Nav-icon">
						<a href="/">
							<i className="fas fa-cocktail"></i>
							<h1>Recipes</h1>
						</a>
					</div>
					<div className="col-4 Title">
						<span onClick={() => this.setState({ showing: !showing })}>
							<i className="fas fa-bars"></i>
							<i className="fas fa-times"></i>
						</span>
					</div>
				</div>
				{ showing 
					? <Menu />
					: null
				}
			</div>
		);
	}
}

export default Header;