import React from 'react';
import './DataList.scss';

const DataList = ({data: {accessor, redfin}}) => {
	console.log(accessor);
	console.log(redfin)

	const getAccessorContent = (accessor) => {
		console.log('invokes')
		let content = [];
		for (let key in accessor) {
			content.push(
				<div>
					<p>{key}</p>
					<p>{accessor[key]}</p>
				</div>
			);
		}

		return content;
	};
	
	return (

		<div>
			<p>Data List</p>
			{/* <p>{JSON.stringify(accessor)}</p> */}

			<div>{getAccessorContent(accessor)}</div>
			
			{/* <p>{JSON.stringify(redfin)}</p> */}
		</div>
	);
};

export default DataList;