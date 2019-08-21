import React, { Component } from 'react';
import Config from '../config';
import Drink from '../Components/Drink';
import Footer from '../Components/Footer';
import { getBaseURL, getUrlVars, getUrlParam } from '../Components/Helpers';


var drinkID = getUrlParam('id','Empty');	

class RecipeContainer extends Component {
	state = {
		data:[],
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/lookup.php?i=" + drinkID
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
			<div className="DrinkContainer">
				{drinks && drinks.map(
					(drink, index) => {

							// The API does not put the Ingredients and Mesurements grouped in
							// an array together, so let's do that ourselves.
							let ingredients = [];
							let measurements = [];
							let needs = [];
							
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

							// Now, let's put this all together!
							for(let i = 0; i < ingredients.length; i++) {
								let ingredient = ingredients[i] ? ingredients[i] : '';
								let measurement = measurements[i] ? measurements[i] : '';
								needs.push( measurement + " " + ingredient );
							}

						return (
							<Drink 	
								key={ index } 
								name={ drink.strDrink }
								id={ drink.idDrink }
								image={ drink.strDrinkThumb }
								needs={ needs }
								instructions={ drink.strInstructions }
								glass={ drink.strGlass }
							/>
						)
					}
				)}
				<Footer />
			</div>
		);
	}
}

export default RecipeContainer;