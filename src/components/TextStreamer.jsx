import React from 'react';

export default class TextStreamer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { flag: false };
	}

	showText = event => {
		this.setState({ flag: !this.state.flag });
		event.preventDefault();
	};

	render() {
		const { string } = this.props;
		if (string.length < 20) {
			return <p>{string}</p>;
		} else {
			if (this.state.flag) {
				return (
					<div>
						<p>{string}</p>
						<a onClick={this.showText}>...</a>
					</div>
				);
			}
			let cutString = string.slice(0, 19) + '...';
			return (
				<div>
					<p>{cutString}</p>
					<a onClick={this.showText}>...</a>
				</div>
			);
		}
	}
}
