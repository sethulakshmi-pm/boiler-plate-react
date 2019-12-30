/**
 * AppLayout.js; Renders the children with the app layout
 * @author Akshay
 */
import React, { Component } from 'react';
import { authHeader } from '../Utils/Utils';

class AppLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '100%',
					position: 'fixed',
					overflowX: 'hidden'
				}}
			>
				{this.props.children}
			</div>
		);
	}
}

export default AppLayout;
