import React, { useState, useEffect } from 'react';
import './LoginForm.scss';

const LoginForm = () => {
	const [ usernameInput, setUsernameInput ] = useState('');
	const [ passwordInput, setPasswordInput ] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log(`form submits with username ${usernameInput} and password ${passwordInput}`);

		// need to validate the username and password
	};

	return (
		<div className='loginform'>
			<p>Please enter your username and password</p>

			<form className='loginform__form' onSubmit={handleFormSubmit}>
				<div className='loginform__username'>
					<label className='loginform__username__label'>Username</label>
					<input
						className='loginform__username__input'
						type='text'
						name='username'
						value={usernameInput}
						placeholder={'username'}
						onChange={(event) => setUsernameInput(event.target.value)}
						required
					/>
				</div>
				<div className='loginform__password'>
					<label className='loginform__password__label'>Password</label>
					<input
						className='loginform__password__input'
						type='password'
						name='password'
						value={passwordInput}
						placeholder={'password'}
						onChange={(event) => setPasswordInput(event.target.value)}
						required
					/>
				</div>

				<button className='loginform__submit' type='submit'>
					Login!
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
