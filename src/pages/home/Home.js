import React from 'react';
import './Home.scss';
import AddressForm from '../../components/addressform/AddressForm';

const Home = () => {
	return (
		<div className='home'>
			<p>Home page</p>
			<AddressForm />
		</div>
	);
};

export default Home;
