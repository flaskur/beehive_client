import React from 'react';
import './Button.scss';

const Button = ({ text, handler }) => {
	return (
		<button className='button' onClick={handler}>
			{text}
		</button>
	);
};

export default Button;
