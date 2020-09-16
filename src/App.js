import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div className='app'>
			<p>This is a test</p>
			<Navbar />

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
