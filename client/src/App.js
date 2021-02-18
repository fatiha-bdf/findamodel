import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import User from './components/users/User'

import AlertState from './context/alert/AlertState'
import UsersState from './context/users/UsersState'


const App = () =>  {
	return (
		<UsersState>
		<AlertState>
		<Router>
			<Fragment >
				<div >
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/user/:name' component={User}/>
					</Switch>
				</div>
			</Fragment>
		</Router>
		</AlertState>
		</UsersState>
	);
}

export default App;
