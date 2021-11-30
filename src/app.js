import { useState } from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

	const [data, setData] = useState(null);
	const [requestParams, setRequestParams] = useState({});

	const callApi = (reqParams) => {
		console.log(formParams);
		const data = {
			count: 2,
			results: [
				{ name: 'fake thing 1', url: 'http://fakethings.com/1' },
				{ name: 'fake thing 2', url: 'http://fakethings.com/2' },
			],
		};
		setData(data);
		setRequestParams(reqParams);
	}

	return (
		<>
			<Header />
			<div>Request Method: {requestParams.method}</div>
			<div>URL: {requestParams.url}</div>
			<Form
				setRequestParam={setRequestParams}
				requestParams={requestParams}
				handleApiCall={callApi} />
			{data ? <Results data={data} /> : <p>loading</p>}
			<Footer />
		</>
	);
}

export default App;
