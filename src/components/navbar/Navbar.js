import React from 'react';
import './Navbar.scss';
import logo from '../../assets/beehive_logo.png';

const Navbar = ({ isAuth }) => {
	const handleLogoutClick = (event) => {
		console.log('logout was clicked and it should remove the jwt token');
	};

	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img className='navbar__logo__image' src={logo} alt='beehive logo' />
			</div>

			<div className='navbar__title'>
				<p className='navbar__title__text'>Property Evaluation Tool</p>
			</div>

			<div className='navbar__links'>{isAuth && <button onClick={handleLogoutClick}>Logout</button>}</div>
		</div>
	);
};

export default Navbar;
