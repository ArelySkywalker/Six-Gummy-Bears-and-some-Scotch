import React, { Component } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

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
					<li className="search">
						<form type="GET" action="/search" >
							<input type="text" name="s" placeholder="Search for a Drink" />
							<button type="submit"><i className="fas fa-search"></i></button>
						</form>
					</li>
					<li>
						<Accordion>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								Common Liquors <i className="fas fa-chevron-down"></i>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<ul>
									{categories && categories.map(
										(item, index) => {
											return (
												<li key={ index }><a href={ item.link }>{ item.name }</a></li>
											)
										}
									)}
								</ul>
							</Accordion.Collapse>
						</Accordion>
					</li>
					<li><a href="/popular">Popular Drinks</a></li>
					<li><a href="/filters">Available Ingredients</a></li>
				</ul>
			</div>
		);
	}
}

export default Menu;