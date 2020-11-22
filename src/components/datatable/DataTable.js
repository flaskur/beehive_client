import React from 'react';
import './DataTable.scss';

const DataTable = ({data: {accessor, redfin}}) => {
	console.log(accessor);
	console.log(redfin);

	const getContent = (data) => {
		let content = [];

		data['market_value'] ? content.push(<div className='datatable__row' key='market_value'>{data['market_value']}</div>) : content.push(<div className='datatable__row' key={'market_value'}>---</div>);
		data['owner'] ? content.push(<div className='datatable__row' key='owner'>{data['owner']}</div>) : content.push(<div className='datatable__row' key={'owner'}>---</div>);
		data['parcel_id'] ? content.push(<div className='datatable__row' key='parcel_id'>{data['parcel_id']}</div>) : content.push(<div className='datatable__row' key={'parcel_id'}>---</div>);
		data['acreage'] ? content.push(<div className='datatable__row' key='acreage'>{data['acreage']}</div>) : content.push(<div className='datatable__row' key={'acreage'}>---</div>);
		data['year_built'] ? content.push(<div className='datatable__row' key='year_built'>{data['year_built']}</div>) : content.push(<div className='datatable__row' key={'year_built'}>---</div>);
		data['kitchens'] ? content.push(<div className='datatable__row' key='kitchens'>{data['kitchens']}</div>) : content.push(<div className='datatable__row' key={'kitchens'}>---</div>);
		data['beds'] ? content.push(<div className='datatable__row' key='beds'>{data['beds']}</div>) : content.push(<div className='datatable__row' key={'beds'}>---</div>);
		data['baths'] ? content.push(<div className='datatable__row' key='baths'>{data['baths']}</div>) : content.push(<div className='datatable__row' key={'baths'}>---</div>);
		data['square_footage'] ? content.push(<div className='datatable__row' key='square_footage'>{data['square_footage']}</div>) : content.push(<div className='datatable__row' key={'square_footage'}>---</div>);

		return content;
	};
	
	return (
		<div className='datatable'>
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