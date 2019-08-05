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
							return (
								<Card 	key={ index } 
										name={ drink.strDrink }
										glass={ drink.strGlass }
										instructions={ drink.strInstructions }
										image={ drink.strDrinkThumb }
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