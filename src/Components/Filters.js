import React, { Component } from 'react';
import Config from '../config';
import MultiSearchSelect from "react-search-multi-select";
import Dropdown from "react-bootstrap/Dropdown";

class Filters extends Component {

	constructor(props) {
		super(props);
		this.state = {
			ingredientsList: [],
			drinkTypeList: [],
			categoryList: [],
			glassTypeList: [],
			drinkType: "",
			category: "",
			glass: ""
		}
	}

	componentDidMount() {
		Promise.all([
			fetch(Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/list.php?i=list"),
			fetch(Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/list.php?a=list"),
			fetch(Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/list.php?c=list"),
			fetch(Config.API_HOST + Config.API_ENDPOINT + Config.API_KEY + "/list.php?g=list")
		])
		.then(([ingredients, drinkTypes, categories, glasses]) => Promise.all([ingredients.json(), drinkTypes.json(), categories.json(), glasses.json()]))
		.then(([ingredientsData, drinkTypesData, categoriesData, glassesData]) => this.setState({
			ingredientsList: ingredientsData.drinks,
			drinkTypeList: drinkTypesData.drinks,
			categoryList: categoriesData.drinks,
			glassTypeList: glassesData.drinks,
		}));
	}

	handleChange = (arr) => {
		var x = document.getElementById("ingredients-list");
  		x.value = arr.join();
	}

	handleSelect = (type, eventKey, event) => {
		switch (type) {
			case "drinkType":
				this.setState({
					...this.state,
					drinkType: this.state.drinkTypeList[eventKey].strAlcoholic
				});
				break;
			case "category":
				this.setState({
					...this.state,
					category: this.state.categoryList[eventKey].strCategory
				});
				break;
			case "glass":
				this.setState({
					...this.state,
					glass: this.state.glassTypeList[eventKey].strGlass
				});
				break;
			default:
				break;
		}
	}

	render() {
		const ingredients = this.state.ingredientsList;
		const drinkTypes = this.state.drinkTypeList;
		const categories = this.state.categoryList;
		const glasses = this.state.glassTypeList;

		var multiSelectValues = [];
		for (var key in ingredients) {
			if (ingredients.hasOwnProperty(key)) {
				multiSelectValues.push(ingredients[key].strIngredient1);
			}
		}

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
								<MultiSearchSelect searchable={true} showTags={true} multiSelect={true} onSelect={this.handleChange} options={multiSelectValues}/>
							</div>
							<div className="col-4 dropdown-wrapper">
								<Dropdown onSelect={this.handleSelect.bind(this, "drinkType")}>
									<Dropdown.Toggle id="dropdown-basic">
										{ this.state.drinkType ? this.state.drinkType : "Drink Type" }
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{
											drinkTypes.map((item, key) => {
												return (
													<Dropdown.Item 
														key={key} 
														eventKey={key}
														value={item.strAlcoholic}
													>
														{item.strAlcoholic}
													</Dropdown.Item>
												)
											})
										}
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="col-4 dropdown-wrapper">
								<Dropdown onSelect={this.handleSelect.bind(this, "category")}>
									<Dropdown.Toggle id="dropdown-basic">
										{ this.state.category ? this.state.category : "Category" }
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{
											categories.map((item, key) => {
												return (
													<Dropdown.Item key={key} eventKey={key} value={item.strCategory}>{item.strCategory}</Dropdown.Item>
												)
											})
										}
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="col-4 dropdown-wrapper">
								<Dropdown onSelect={this.handleSelect.bind(this, "glass")}>
									<Dropdown.Toggle id="dropdown-basic">
										{ this.state.glass ? this.state.glass : "Glass Type" }
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{
											glasses.map((item, key) => {
												return (
													<Dropdown.Item key={key} eventKey={key} value={item.strGlass}>{item.strGlass}</Dropdown.Item>
												)
											})
										}
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="col-12 submit">
								<input id="ingredients-list" name="ingredients" type="hidden" value={this.state.value} onChange={ this.handleChange } />
								<input id="drink-type" name="drinkType" type="hidden" value={this.state.drinkType} onChange={ this.handleSelect } />
								<input id="category" name="category" type="hidden" value={this.state.category} onChange={ this.handleSelect } />
								<input id="glass" name="glass" type="hidden" value={this.state.glass} onChange={ this.handleSelect } />
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