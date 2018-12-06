import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero';

// import Home from './components/Home';

const renderApplication = () => {
	ReactDOM.render(<Hero />, document.querySelector('#root'));
};

renderApplication();

if (module.hot) {
	module.hot.accept('./components/Home', () => {
		renderApplication();
	});
}
