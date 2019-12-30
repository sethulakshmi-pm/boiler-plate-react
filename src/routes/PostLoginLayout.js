/**
 * PostLoginLayout.js;  Renders the children with the post login app layout
 */
import React, { Component } from "react";
import { authHeader } from "../Utils/Utils";

class PostLoginLayout extends Component {
	render() {
		return (
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					overflow: "auto"
				}}
			>
				{this.props.children}
			</div>
		);
	}
}

export default PostLoginLayout;
