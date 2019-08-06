import React from 'react';
import Header from './Components/Header';
import MainContainer from './Containers/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';

function App() {
	return (
		<div className="App">
			<div className="Main">
				<Header />
				<MainContainer />
			</div>
		</div>
	);
}

export default App;
