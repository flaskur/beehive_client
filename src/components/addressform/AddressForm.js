import React, { useState } from 'react';
import './AddressForm.scss';

const AddressForm = ({ setData }) => {
	const [ houseNumInput, setHouseNumInput ] = useState('290');
	const [ streetNameInput, setStreetNameInput ] = useState('w 300 s');
	const [ zipcodeInput, setZipcodeInput ] = useState('84032');
	const [ errorMessage, setErrorMessage ] = useState('')
	
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		console.log('address form submits');

		// house num validation
		if (isNaN(houseNumInput)) {
			setErrorMessage('INVALID HOUSE NUMBER')
			return;
		}
		
		if (zipcodeInput.length !== 5 || isNaN(zipcodeInput)) {
			setErrorMessage('INVALID ZIPCODE')
			return;
		}

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

		setData(data);
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
