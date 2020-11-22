import React from 'react';
import './DataList.scss';

const DataList = ({data: {accessor, redfin}}) => {
	console.log(accessor);
	console.log(redfin)

	const getAccessorContent = (accessor) => {
		let content = [];
		for (let key in accessor) {
			content.push(
				<div class='datalist__row'>
					<p>{key}</p>
					<p>{accessor[key]}</p>
				</div>
			);
		}

		return content;
	};
	const getRedfinContent = (redfin) => {
		let content = [];
		for (let key in redfin) {
			content.push(
				<div class='datalist__row'>
					<p>{key}</p>
					<p>{redfin[key]}</p>
				</div>
			);
		}

		return content;
	};
	
	return (

		<div>
			<p>Data List</p>
			{/* <p>{JSON.stringify(accessor)}</p> */}
			<div>
				<h1>ACCESSOR SHOULD BE DYNAMIC</h1>
				<div class='datalist__accessor'>{getAccessorContent(accessor)}</div>
			</div>

			<div>
				<h1>REDFIN</h1>
				<div class='datalist__redfin'>{getRedfinContent(redfin)}</div>
			</div>
			
			{/* <p>{JSON.stringify(redfin)}</p> */}
		</div>
	);
};

export default DataList;