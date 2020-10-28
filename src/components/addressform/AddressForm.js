import React, { useState } from 'react';
import './AddressForm.scss';

const AddressForm = ({ showStatistics }) => {
	const [ houseNumInput, setHouseNumInput ] = useState('2451');
	const [ streetNameInput, setStreetNameInput ] = useState('e ellisonwoods ave');
	const [ zipcodeInput, setZipcodeInput ] = useState('84121');
	const [ errorMessage, setErrorMessage ] = useState('')
	
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		console.log('address form submits');

		// house num validation
		// for (let i = 0; i < houseNumInput.length; i++) {
		// 	let val = parseInt(houseNumInput[i], 10);
		// 	console.log(val, i, isNaN(val));
		// 	let val2 = isNaN(parseInt(houseNumInput[i], 10));
		// 	console.log(val, val2);
			
		// 	// if any char in house num is not a num, invalid
		// 	if (val2) {
		// 		console.log(val2, 'triggers')
		// 		console.log(i, 'house num not a number');

		// 		setErrorMessage('Invalid House Number');
		// 		return;
		// 	}
		// }

		// zipcode validation
		// if (zipcodeInput.length !== 5) {
		// 	console.log('zipcode not a number');

		// 	setErrorMessage('Invalid Zipcode')
		// 	return;
		// }
		// for (let i = 0; i < zipcodeInput.length; i++) {
		// 	// if any char in zipcode is not a num, invalid
		// 	// if any char in house num is not a num, invalid
		// 	if (isNaN(parseInt(houseNumInput[i], 10))) {
		// 		console.log('house num not a number');

		// 		setErrorMessage('Invalid House Number');
		// 		return;
		// 	}
		// }
		

		// this is suppose to fetch all the possible data from every single site, but for now we focus on one site to scrape
		const response = await fetch('http://localhost:5000/scrape', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				houseNum: houseNumInput,
				streetName: streetNameInput.toLowerCase(),
				zipcode: zipcodeInput,
			}),
		});
		const data = await response.json();
		console.log(data);

		// from the given data, we are suppose to showcase on main page, so maybe use a outer function
		showStatistics();
	};

	return (
		<div className='addressform'>
			<p>addressform component</p>

			<p className='addressform__error'>{errorMessage}</p>

			<form className='addressform__form' onSubmit={handleFormSubmit}>
				<div className='addressform__upper'>
					<div className='addressform__housenum'>
						<label className='addressform__housenum__label'>House Number</label>
						<input
							className='addressform__housenum__input'
							type='text'
							name='housenum'
							value={houseNumInput}
							placeholder='house number'
							onChange={(event) => setHouseNumInput(event.target.value)}
							required
						/>
					</div>

					<div className='addressform__streetname'>
						<label className='addressform__streetname__label'>Street Name</label>
						<input
							className='addressform__streetname__input'
							type='text'
							name='streetname'
							value={streetNameInput}
							placeholder='street name'
							onChange={(event) => setStreetNameInput(event.target.value)}
							required
						/>
					</div>

					<div className='addressform__zipcode'>
						<label className='addressform__zipcode__label'>Zipcode</label>
						<input
							className='addressform__zipcode__input'
							type='text'
							name='zipcode'
							value={zipcodeInput}
							placeholder={'zipcode'}
							onChange={(event) => setZipcodeInput(event.target.value)}
							required
						/>
					</div>
				</div>
			
				<button className='addressform__submit' type='submit'>
					Search!
				</button>
			</form>
		</div>
	);
};

export default AddressForm;
