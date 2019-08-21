import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';


class AboutContainer extends Component {

	render() {
		return (
			<div className="Recipes">
				<Banner />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>Developer:</h3>
							<h4>Arely Miramontes Rodríguez</h4>
							<br />
							<p>Cheers! Welcome to my Cocktail App. I built this mostly for fun, and also because I love hosting dinner parties and one of my main struggles is trying to figure out what specialty cocktails I can make with what I have at home.</p>
							<p>I hope this app helps you out as much as it's helped me out! If you want to contribute, you can visit the Github repo to this <a href="https://github.com/ArelySkywalker/Six-Gummy-Bears-and-some-Scotch" target="_blank">project</a>.</p>
							<p><a href="https://arelyskywalker.dev/" target="_blank">My Website</a> | <a href="https://www.instagram.com/arelyskywalker/" target="_blank">Instagram</a> | <a href="https://twitter.com/ArelySkywalker" target="_blank">Twitter</a> | <a href="https://github.com/ArelySkywalker" target="_blank">Github</a></p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default AboutContainer;