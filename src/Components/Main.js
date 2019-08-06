import React, { Component } from 'react';
import Ingredient from './Ingredient';
import Whiskey from './Images/whiskey.jpg';
import Vodka from './Images/vodka.jpg';
import Gin from './Images/gin.jpg';
import Rum from './Images/rum.jpg';
import Tequila from './Images/tequila.jpg';

const categories = [
	{ name: 'Whiskey', image: Whiskey },
	{ name: 'Vodka', image: Vodka },
	{ name: 'Gin', image: Gin },
	{ name: 'Rum', image: Rum },
	{ name: 'Tequila', image: Tequila }
];

class Main extends Component {

	render() {
		return (
			<div className="Main">
				<div className="Main-ingredients">
					{categories && categories.map(
						(item, index) => {
							return (
								<Ingredient 	
									key={ index } 
									name={ item.name }
									image={ item.image }
								/>
							)
						}
					)}
				</div>
			</div>
		);
	}
}


export default Main;