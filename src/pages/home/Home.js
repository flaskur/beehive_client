import React, {useState} from 'react';
import './Home.scss';
import AddressForm from '../../components/addressform/AddressForm';
import DataTable from '../../components/datatable/DataTable';
import DataList from '../../components/datalist/DataList';

const Home = () => {
	const [data, setData] = useState({})
	
	// const showStatistics = (data) => {
	// 	console.log('show statistics should take given data for each site and change homepage state');

	// 	setData(data);
	// };

	return (
		<div className='home'>
			<p>Home page</p>
			<AddressForm setData={setData} />

			{
				Object.keys(data).length !== 0 ?
				<div>
					<DataTable data={data} />
					<DataList data={data} />
				</div>
				:
				<p>Nothing Yet</p>
			}

		</div>
	);
};

export default Home;
