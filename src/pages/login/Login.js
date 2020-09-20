import React from 'react';
import './Login.scss';
import LoginForm from '../../components/loginform/LoginForm';

const Login = ({ setIsAuth }) => {
	return (
		<div className='login'>
			<p>login page</p>
			<LoginForm setIsAuth={setIsAuth} />
		</div>
	);
};

export default Login;
