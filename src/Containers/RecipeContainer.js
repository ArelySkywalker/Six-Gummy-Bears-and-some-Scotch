import React, { Component } from 'react';
import Config from '../config';
import Footer from '../Components/Footer';
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
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/filter.php?i=" + base
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
					<div className="row justify-content-md-center">
						{drinks && drinks.map(
							(drink, index) => {
								return (
									<Card 	
										key={ index } 
										name={ drink.strDrink }
										id={ drink.idDrink }
										image={ drink.strDrinkThumb }
									/>
								)
							}
						)}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default RecipeContainer;