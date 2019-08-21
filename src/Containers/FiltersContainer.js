import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Filters from '../Components/Filters';
import Footer from '../Components/Footer';

class FiltersContainer extends Component {

	render() {
		return (
			<div className="Filters">
				<Banner />
				<Filters />
				<Footer />
			</div>
		);
	}
}


export default FiltersContainer;