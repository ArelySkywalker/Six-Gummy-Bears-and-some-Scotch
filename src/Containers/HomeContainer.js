import React, { Component } from 'react';
import Ingredient from '../Components/Ingredient';
import Whiskey from '../Components/Images/Optimized-whiskey.jpg';
import Vodka from '../Components/Images/Optimized-vodka.jpg';
import Gin from '../Components/Images/Optimized-gin.jpg';
import Rum from '../Components/Images/Optimized-rum.jpg';
import Tequila from '../Components/Images/Optimized-tequila.jpg';

const categories = [
	{ name: 'Whiskey', image: Whiskey, link: '/whiskey' },
	{ name: 'Vodka', image: Vodka, link: '/vodka' },
	{ name: 'Gin', image: Gin, link: '/gin' },
	{ name: 'Rum', image: Rum, link: '/rum' },
	{ name: 'Tequila', image: Tequila, link: '/tequila' }
];

class HomeContainer extends Component {

	render() {
		return (
			<div className="Home">
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


export default HomeContainer;