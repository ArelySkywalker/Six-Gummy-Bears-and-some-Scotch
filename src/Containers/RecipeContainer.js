import React, { Component } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Card from '../Components/Card';

const str = window.location.href;
var base = new String(str).substring(str.lastIndexOf('/') + 1); 
if(base.lastIndexOf(".") !== -1) {
	base = base.substring(0, base.lastIndexOf("."));
}

class RecipeContainer extends Component {
	state = {
		data:[],
		url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + base
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
			<div className="Recipes">
				<Banner />
				<div className="Recipes-loop container">
					<div className="row">
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

								console.log(drink);

								return (
									<Card 	
										key={ index } 
										name={ drink.strDrink }
										glass={ drink.strGlass }
										instructions={ drink.strInstructions }
										image={ drink.strDrinkThumb }
										ingredients={ ingredients }
										measurements={ measurements }
									/>
								)
							}
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default RecipeContainer;