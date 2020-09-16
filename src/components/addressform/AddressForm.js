import React, { useState } from 'react';
import './AddressForm.scss';

const AddressForm = () => {
	const [ addressInput, setAddressInput ] = useState('');
	const [ cityInput, setCityInput ] = useState('');
	const [ stateInput, setStateInput ] = useState('Utah');
	const [ zipcodeInput, setZipcodeInput ] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log('address form submits');

		// need to validate state values before doing the fetch call
	};

	return (
		<div className='addressform'>
			<p>addressform component</p>

			<form className='addressform__form' onSubmit={handleFormSubmit}>
				<div className='addressform__address'>
					<label className='addressform__address__label'>Address</label>
					<input
						className='addressform__address__input'
						type='text'
						name='address'
						value={addressInput}
						placeholder={'address'}
						onChange={(event) => setAddressInput(event.target.value)}
						required
					/>
				</div>

				<div className='addressform__lower'>
					<div className='addressform__city'>
						<label className='addressform__city__label'>City</label>
						<input
							className='addressform__city__input'
							type='text'
							name='city'
							value={cityInput}
							placeholder={'city'}
							onChange={(event) => setCityInput(event.target.value)}
							required
						/>
					</div>
					<div className='addressform__state'>
						<label className='addressform__state__label'>State</label>
						<input
							className='addressform__state__input'
							type='text'
							name='state'
							value={stateInput}
							placeholder={'state'}
							onChange={(event) => setStateInput(event.target.value)}
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
