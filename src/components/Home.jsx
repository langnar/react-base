import React from 'react';
import List from './List';

const options = [
	{ id: '1', value: 1 },
	{ id: '2', value: 2 },
	{ id: '3', value: 3 },
	{ id: '4', value: 4 }
];

class Home extends React.Component {
	render() {
		return (
			<div>
				<List options={options} />
			</div>
		);
	}
}
export default Home;
