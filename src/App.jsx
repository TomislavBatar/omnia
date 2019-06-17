import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pocetna from './pages/Pocetna/Pocetna';
import NoMatch from './pages/NoMatch/NoMatch';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Pocetna} />
					<Route component={NoMatch} />
				</Switch>
			</React.Fragment>
		);
	}
}
