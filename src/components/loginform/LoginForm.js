import React, { useState } from 'react';
import './LoginForm.scss';

const LoginForm = ({ setIsAuth }) => {
	const [ usernameInput, setUsernameInput ] = useState('');
	const [ passwordInput, setPasswordInput ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(''); // if login fails

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		console.log(`form submits with username ${usernameInput} and password ${passwordInput}`);

		// post login request return json response with token and error
		const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				username: usernameInput,
				password: passwordInput,
			}),
		});
		const data = await response.json(); // convert from json string into json object

		// server failed for some reason
		if (data.error) {
			setErrorMessage(data.error);
			return;
		}

		// otherwise set localstorage token to verify login
		localStorage.setItem('token', data.token);

		setIsAuth(true); // sets our page to home page
	};

	return (
		<div className='loginform'>
			<p>Please enter your username and password</p>

			<p className='loginform__error'>{errorMessage}</p>

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
