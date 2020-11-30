import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

const App = () => {
	const [ isAuth, setIsAuth ] = useState(false);

	// on initial load, check if jwt exists in local storage to authenticate
	useEffect(() => {
		const localToken = localStorage.getItem('token');
		if (!localToken) return;

		setIsAuth(true);
	}, []);

	return (
		<div className='app'>
			<Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

			<Switch>
				<Route exact path='/' render={() => (isAuth ? <Home /> : <Login setIsAuth={setIsAuth} />)} />

				<Route exact path='/login'>
					<Login setIsAuth={setIsAuth} />
				</Route>

				<Route exact path='/about'>
					<About />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
