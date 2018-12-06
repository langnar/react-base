import React from 'react';
import HeroList from './HeroList';
import options from '../utils/heroes';
import TextStreamer from './TextStreamer';

const myRender = element => {
	return (
		<div key={element.id}>
			<h1>{element.hero}</h1>
			<h3>{element.name}</h3>
			<img src={element.avatar} />
			<TextStreamer string={element.description} />
		</div>
	);
};

class Hero extends React.Component {
	render() {
		return (
			<div>
				<HeroList options={options} parentTag="div" customRender={myRender} />
			</div>
		);
	}
}
export default Hero;
