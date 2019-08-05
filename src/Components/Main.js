import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
			<Grid item xs={3}>
				<Paper className="Paper">
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
				</Paper>
			</Grid>
		</div>
		);
	}
}


export default Main;