import React, { Component } from 'react';
import Config from '../config';
import MultiSearchSelect from "react-search-multi-select";

var key;

class Filters extends Component {

	state = {
		data:[],
		url: Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/list.php?i=list"
	};

	componentDidMount() {
		fetch(this.state.url)
		.then(response => response.json())
		.then(data => this.setState({ data }));
	}

	handleChange = (arr) => {
		console.log(arr);
		var x = document.getElementById("ingredients-list");
  		x.value = arr.join();
	}

	render() {
		const { data } = this.state;
		const ings = data.drinks;
		var values = [];
		for (var key in ings) {
			if (ings.hasOwnProperty(key)) {
				values.push(ings[key].strIngredient1);
			}
		}

		console.log(this.handleChange);

		return (
			<div className="Filters">
				<div className="container">
					<div className="row">
						<div className="col-12 title">
							<h2>Available Ingredients:</h2>
							<p>Select the ingredients you currently possess and we will tell you what cocktails you can make with them!</p>
						</div>
					</div>
					<form type="GET" action="/results">
						<div className="row">
							<div className="col-12 select-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
								<MultiSearchSelect searchable={true} showTags={true} multiSelect={true} onSelect={this.handleChange} options={values}/>
							</div>
							<div className="col-12 submit">
								<input id="ingredients-list" name="ingredients" type="hidden" value={ this.handleChange } />
								<button type="submit">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Filters;