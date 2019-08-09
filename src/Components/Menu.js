import React, { Component } from 'react';

const categories = [
	{ name: 'Whiskey', link: '/whiskey' },
	{ name: 'Vodka', link: '/vodka' },
	{ name: 'Gin', link: '/gin' },
	{ name: 'Rum', link: '/rum' },
	{ name: 'Tequila', link: '/tequila' }
];

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<ul>
					{categories && categories.map(
						(item, index) => {
							return (
								<li key={ index }><a href={ item.link }>{ item.name }</a></li>
							)
						}
					)}
				</ul>
			</div>
		);
	}
}

export default Menu;