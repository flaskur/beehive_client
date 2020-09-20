import React from 'react';
import './Home.scss';
import AddressForm from '../../components/addressform/AddressForm';

const Home = () => {
	const showStatistics = () => {
		console.log('show statistics should take given data for each site and change homepage state');
	};

	return (
		<div className='home'>
			<p>Home page</p>
			<AddressForm showStatistics={showStatistics} />
		</div>
	);
};

export default Home;
