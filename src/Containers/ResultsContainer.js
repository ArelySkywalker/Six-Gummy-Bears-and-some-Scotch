import React, { Component } from 'react';
import Config from '../config';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import { getUrlParam } from '../Components/Helpers';

var ingredients = getUrlParam('ingredients', undefined);
var drinkType = getUrlParam('drinkType', undefined);
var category = getUrlParam('category', undefined);
var glass = getUrlParam('glass', undefined);

const parameters = "?" 
	+ (ingredients ? "i=" + ingredients : "") 
	+ (drinkType ? "&a=" + drinkType : "") 
	+ (category ? "&c=" + category : "")
	+ (glass ? "&g=" + glass : "");

class ResultsContainer extends Component {
	state = {
		data:[],
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/filter.php" + parameters
	};

	componentDidMount() {
		fetch(this.state.url)
		.then(response => response.json())
		.then(data => this.setState({ data }));
	}

	render() {
		const { data } = this.state;
		const drinks = data.drinks;

		if(drinks === "None Found") {
			return (
				<div className="Recipes">
					<Banner />
					<div className="Recipes-loop container">
						<div className="row justify-content-md-center">
							<div className="col-12">
								<h2>No Drinks Found.</h2>
								<a className="btn" href="/filters">Seach Again</a>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			);
		}else {
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
}

export default ResultsContainer;