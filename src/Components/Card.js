import React, { Component } from "react";
import Config from '../config';

class Card extends Component {
	state = {
		data:[],
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/lookup.php?i=" + this.props.id
	};

	componentDidMount() {
		fetch(this.state.url)
		.then(response => response.json())
		.then(data => this.setState({ data }));
	}
	render() {
		const { data } = this.state;
		const drinks = data.drinks;
		return (
			<div className="Card col-lg-4 col-md-6">
				<div className="inner">
				{drinks && drinks.map(
					(drink, index) => {

							// Let's call in the Drink's glass and assign them to our
							// special glass icons!
							var strGlass = drink.strGlass;
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
								<a href={ `/drink?id=${ drink.idDrink }` } className="Card-drink" key={ drink.idDrink }>
									<img className="icon" alt={ drink.strGlass } src={require('./Images/glass/'+ glass +'.png')} />
									<h3 className="drink-name">{ drink.strDrink }</h3>
									<p className="drink-cat">
										<strong>{ drink.strCategory }</strong><br />
										{ drink.strGlass }
									</p>
								</a>
							)	
						}
					)}
				</div>
			</div>
		);
	}
}

export default Card;