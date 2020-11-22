import React from 'react';
import './DataList.scss';

const DataList = ({data: {accessor, redfin}}) => {
	console.log(accessor);
	console.log(redfin)

	const getAccessorContent = (accessor) => {
		let content = [];
		for (let key in accessor) {
			content.push(
				<div className='datalist__row' key={key}>
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
				<div className='datalist__row' key={key}>
					<p>{key}</p>
					<p>{redfin[key]}</p>
				</div>
			);
		}

		return content;
	};
	
	return (

		<div>
			<h1>Data List</h1>

			<div>
				<h1>ACCESSOR SHOULD BE DYNAMIC</h1>
				<div className='datalist__accessor'>{getAccessorContent(accessor)}</div>
			</div>

			<div>
				<h1>REDFIN</h1>
				<div className='datalist__redfin'>{getRedfinContent(redfin)}</div>
			</div>
			
		</div>
	);
};

export default DataList;