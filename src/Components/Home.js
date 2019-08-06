import React, { Component } from 'react';
import Header from './Header';
import Ingredient from './Ingredient';
import Whiskey from './Images/whiskey.jpg';
import Vodka from './Images/vodka.jpg';
import Gin from './Images/gin.jpg';
import Rum from './Images/rum.jpg';
import Tequila from './Images/tequila.jpg';

const categories = [
	{ name: 'Whiskey', image: Whiskey, link: '/whiskey' },
	{ name: 'Vodka', image: Vodka, link: '/vodka' },
	{ name: 'Gin', image: Gin, link: '/gin' },
	{ name: 'Rum', image: Rum, link: '/rum' },
	{ name: 'Tequila', image: Tequila, link: '/tequila' }
];

class Home extends Component {

	render() {
		return (
			<div className="Home">
				<Header />
				<div className="Home-ingredients">
					{categories && categories.map(
						(item, index) => {
							return (
								<Ingredient 	
									key={ index } 
									name={ item.name }
									image={ item.image }
									link={ item.link }
								/>
							)
						}
					)}
				</div>
			</div>
		);
	}
}


export default Home;