import React from 'react';
import './DataList.scss';

const DataList = ({data: {accessor, redfin}}) => {
	const getAccessorContent = (accessor) => {
		let content = [];
		for (let key in accessor) {
			if (key === 'error' || key === 'val_history' || key === 'det_structures' || key === 'url') continue;
			
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
			if (key === 'url') continue;
			
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

		<div className='datalist'>
			<div className='datalist__list'>
				{accessor.county && <h1 className='datalist__title'>{accessor.county}</h1>}
				<div className='datalist__accessor'>{getAccessorContent(accessor)}</div>
			</div>

			{/* <div className='datalist__list'>
				<h1 className='datalist__title'>REDFIN</h1>
				<div className='datalist__redfin'>{getRedfinContent(redfin)}</div>
			</div> */}
			
		</div>
	);
};

export default DataList;