import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Drink from '../Components/Drink';
import { getBaseURL, getUrlVars, getUrlParam } from '../Components/Helpers';


var drinkID = getUrlParam('id','Empty');	

class RecipeContainer extends Component {
	state = {
		data:[],
		url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID
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
			<div className="Drink">
				{drinks && drinks.map(
					(drink, index) => {
						return (
							<Banner 
								name={ drink.strDrink } 
								id={ drink.idDrink }
								image={ drink.strDrinkThumb } 
								key={ index } 
							/>
						)
					}
				)}
				<div className="container">
					<div className="row justify-content-md-center">
						{drinks && drinks.map(
							(drink, index) => {
								return (
									<Drink 	
										key={ index } 
										name={ drink.strDrink }
										id={ drink.idDrink }
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