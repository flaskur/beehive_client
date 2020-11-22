import React from 'react';
import './DataTable.scss';

const DataTable = ({data: {accessor, redfin}}) => {
	console.log(accessor);
	console.log(redfin);

	const getContent = (data) => {
		let content = [];

		data['market_value'] ? content.push(<div className='datatable__row'>{data['market_value']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['owner'] ? content.push(<div className='datatable__row'>{data['owner']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['parcel_id'] ? content.push(<div className='datatable__row'>{data['parcel_id']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['acreage'] ? content.push(<div className='datatable__row'>{data['acreage']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['year_built'] ? content.push(<div className='datatable__row'>{data['year_built']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['kitchens'] ? content.push(<div className='datatable__row'>{data['kitchens']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['beds'] ? content.push(<div className='datatable__row'>{data['beds']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['baths'] ? content.push(<div className='datatable__row'>{data['baths']}</div>) : content.push(<div className='datatable__row'>---</div>);
		data['square_footage'] ? content.push(<div className='datatable__row'>{data['square_footage']}</div>) : content.push(<div className='datatable__row'>---</div>);
		// content.push(<div className='datatable__row'>{data['owner']}</div>)
		// content.push(<div className='datatable__row'>{data['parcel_id']}</div>)
		// content.push(<div className='datatable__row'>{data['acreage']}</div>)
		// content.push(<div className='datatable__row'>{data['year_built']}</div>)
		// content.push(<div className='datatable__row'>{data['kitchens']}</div>)
		// content.push(<div className='datatable__row'>{data['beds']}</div>)
		// content.push(<div className='datatable__row'>{data['baths']}</div>)
		// content.push(<div className='datatable__row'>{data['square_footage']}</div>)

		// for (let key in data) {
		// 	if (['market_value', 'owner', 'parcel_id', 'acreage', 'year_built', 'kitchens', 'beds', 'baths', 'square_footage'].includes(key)) {
		// 		content.push(<div class='datatable__row'>{data[key]}</div>)
		// 	}
		// }

		return content;
	};
	
	return (
		<div class='datatable'>
			<h1>DATA TABLE</h1>

			<div className='datatable__table'>
				<div className='datatable__column'>
					<div className='datatable__row'>EMPTY</div>
					<div className='datatable__row'>MARKET VALUE</div>
					<div className='datatable__row'>OWNER</div>
					<div className='datatable__row'>PARCEL ID</div>
					<div className='datatable__row'>ACREAGE</div>
					<div className='datatable__row'>YEAR BUILT</div>
					<div className='datatable__row'>KITCHENS</div>
					<div className='datatable__row'>BEDS</div>
					<div className='datatable__row'>BATHS</div>
					<div className='datatable__row'>SQUARE FOOTAGE</div>
				</div>

				<div className='datatable__column'>
					<div className='datatable__row'>ACCESSOR</div>
					{getContent(accessor)}
				</div>

				<div className='datatable__column'>
					<div className='datatable__row'>REDFIN</div>
					{getContent(redfin)}
				</div>
			</div>
		</div>
	);
};

export default DataTable;