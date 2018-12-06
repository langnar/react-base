import React from 'react';
import TextStreamer from './TextStreamer';

export default class HeroList extends React.Component {
	renderHero(element) {
		return (
			<li key={element.id}>
				<h1>{element.hero}</h1>
				<img src={element.avatar} />
				<p>{element.name}</p>
				<TextStreamer string={element.description} />
				<a href="#">Click</a>
			</li>
		);
	}

	render() {
		const {
			options = [],
			parentTag,
			customRender = this.renderHero
		} = this.props;
		const listItems = options.map(customRender);

		switch (parentTag) {
		case 'ul':
			return <ul>{listItems}</ul>;

		case 'div':
			return <div>{listItems}</div>;

		default:
			throw new Error('No tag');
		}
	}
}
