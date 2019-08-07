import React, { Component } from "react";

class Card extends Component {
	state = {
		data:[],
		url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.id
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
			<div className="Card col-lg-6">
				<div className="inner">
				{drinks && drinks.map(
					(drink, index) => {
							// The API does not put the Ingredients and Mesurements grouped in
							// an array together, so let's do that ourselves.
							let ingredients = [];
							let measurements = [];
							
							for (var key in drink) {
								if(drink[key] && key.includes("strIngredient")) {
									ingredients.push(drink[key]);
								}
								// Some measurement objects aren't truly "epmty", so let's add in
								// The match function to make sure at least a character is in
								if(drink[key] && key.includes("strMeasure") && drink[key].match(/[a-zA-Z0-9]/i)) {
									measurements.push(drink[key]);
								}
							}

							var strGlass = drink.strGlass;
							let glass = '';
							if(strGlass === 'Margarita/Coupette glass') {
								glass = 'margarita_coupetteglass';
							}else{
								glass = strGlass.toLowerCase().replace(/\s+/g, '');
							}
							
							return (
								<div className="Card-drink" key={ drink.idDrink }>
									<img className="icon" alt={ drink.strGlass } src={require('./Images/glass/'+ glass +'.png')} />
									<h3 className="drink-name">{ drink.strDrink }</h3>
									<p className="drink-cat">Category: { drink.strCategory }</p>
									<p className="drink-glass">Glass: { drink.strGlass }</p>
								</div>
							)	
						}
					)}
				</div>
			</div>
		);
	}
}

export default Card;