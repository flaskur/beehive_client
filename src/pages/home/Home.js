import React, {useState} from 'react';
import './Home.scss';
import AddressForm from '../../components/addressform/AddressForm';
import DataTable from '../../components/datatable/DataTable';
import DataList from '../../components/datalist/DataList';

const Home = () => {
	const [data, setData] = useState({})
	const [status, setStatus] = useState('IDLE')

	return (
		<div className='home'>
			<AddressForm setData={setData} setStatus={setStatus}/>

			<h3>STATUS: {status}</h3>

			{
				Object.keys(data).length !== 0 
				&&
				<div>
					<DataTable data={data} />
					<DataList data={data} />
				</div>
			}

		</div>
	);
};

export default Home;
