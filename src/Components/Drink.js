import React, { Component } from "react";

class Drink extends Component {
	render() {
		// Let's call in the Drink's glass and assign them to our
		// special glass icons!
		var strGlass = this.props.glass;
		let glass = '';

		// Margarita/Coupette is a special case, since we don't want to
		// name an image with a slash in it, let's swap this out.
		if(strGlass === 'Margarita/Coupette glass') {
			glass = 'margarita_coupetteglass';
		}else{
			// Lowercase the glass name and take out all spaces.
			glass = strGlass.toLowerCase().replace(/\s+/g, '');
		}
		return (
			<div className="Drink row">
				<div className="col-lg-6 Drink-image" style={ { backgroundImage: `url(${ this.props.image })` } }></div>
				<div className="col-lg-6 Drink-content">
					<div className="Drink-inner">
						<h1 className="Drink-name">{ this.props.name }</h1>
						<div className="row Drink-needs">
							<div className="col-sm-6">
								<ul>
									{this.props.needs && this.props.needs.map(
										(need, index) => {
											return (
												<li key={ index }>{ need }</li>
											)	
										}
									)}
								</ul>
							</div>
							<div className="col-sm-6">
								<img className="icon" alt={ this.props.glass } src={require('./Images/glass/'+ glass +'.png')} />
								<h6>{ this.props.glass }</h6>
							</div>
						</div>
						<div className="Drink-instructions">
							<h4>Instructions:</h4>
							<p>{ this.props.instructions }</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Drink;