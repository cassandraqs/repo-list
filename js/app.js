import React from 'react'
import {RepoList} from './repo'

var AppView = React.createClass({
	render: function() {
		return (
			<div>
				<h2>{"Shan's repo"}</h2>
				<RepoList />
			</div>
		)
	}
});

React.render(
	<AppView />,
	document.body
);