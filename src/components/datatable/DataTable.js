import React from 'react';
import './DataTable.scss';

const DataTable = ({accessor, redfin}) => {
	console.log(accessor);
	console.log(redfin);
	return (
		<div>
			<p>data table</p>
			<p>{JSON.stringify(accessor)}</p>
			<p>{JSON.stringify(redfin)}</p>
		</div>
	);
};

export default DataTable;