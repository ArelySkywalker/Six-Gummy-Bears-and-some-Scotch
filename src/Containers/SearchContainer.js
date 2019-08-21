import React, { Component } from 'react';
import Config from '../config';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import { getBaseURL, getUrlVars, getUrlParam } from '../Components/Helpers';


var search = getUrlParam('s','Empty');	
Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};


class SearchContainer extends Component {
	state = {
		data:[],
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/search.php?s=" + search
	};

	componentDidMount() {
		fetch(this.state.url)
		.then(response => response.json())
		.then(data => this.setState({ data }));
	}

	render() {
		const { data } = this.state;
		const drinks = data.drinks;
		var size = Object.size(drinks);
		return (
			<div className="Recipes">
				<Banner />
				<div className="Recipes-loop container">
					<div className="row">
						<div className="col-12">
							<h2>{ size } { size > 1 ? "results" : "result" } for: { search }</h2>
						</div>
					</div>
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

export default SearchContainer;