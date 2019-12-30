/**
 * Main Routes File
 * @author Akshay
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "../containers/Content/Login";
import PostLogin from "../containers/Content/PostLogin";
// import AccountVerification from "../containers/AccountVerification/AccountVerification";
// import Upgrade from "../containers/Content/Upgrade";


/**
 * App Route Component to set the layout and render corresponding components
 */
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		render={props => (
			<Layout {...props}>
				<Component {...props} />
			</Layout>
		)}
		{...rest}
	/>
);

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<AppRoute exact path="/" layout={AppLayout} component={Upload} />
					<AppRoute exact path="/login" layout={AppLayout} component={Login} />
					<AppRoute path="/signup" layout={AppLayout} component={SignUp} />
					<AppRoute path="/sharpic-success" layout={PostLoginLayout} component={PostLogin} />
				</Switch>
			</Router>
		);
	}
}
export default Routes;
