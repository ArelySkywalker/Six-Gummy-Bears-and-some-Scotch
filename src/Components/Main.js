import React, { Component } from 'react';
import Card from './Card';
import { render } from "react-dom";


class Main extends Component {
	state = {
		data:[],
		url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
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
		<div className="Main">
			<div className="container">
				<div className="row">
					{drinks && drinks.map(
						(drink, index) => {
							let ingredients = [];
							let measurements = [];
							
							for (var key in drink) {
								if(drink[key] && key.includes("strIngredient")) {
									ingredients.push(drink[key]);
								}
								if(drink[key] && key.includes("strMeasure") && drink[key].match(/[a-z]/i)) {
									measurements.push(drink[key]);
								}
							 }

							return (
								<Card 	key={ index } 
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


export default Main;