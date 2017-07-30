import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './app.scss';

ReactDOM.render(
	<div className="test">Some text</div>,
	window.document.getElementById('mount-point')
);