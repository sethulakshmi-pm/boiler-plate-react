/**
 * App JS; here, all routes are rendered
 * @author Akshay
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes/Routes";

class App extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Routes />
				</ConnectedRouter>
			</Provider>
		);
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default App;
