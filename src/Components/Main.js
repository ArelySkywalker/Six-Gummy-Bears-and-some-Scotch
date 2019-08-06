// Import our Routers
import React, { Component }  from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';

const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route path="/whiskey" component={ Recipes } />
			<Route path="/vodka" component={ Recipes } />
			<Route path="/gin" component={ Recipes } />
			<Route path="/rum" component={ Recipes } />
			<Route path="/tequila" component={ Recipes } />
		</Switch>
	</BrowserRouter>
)

export default Main;