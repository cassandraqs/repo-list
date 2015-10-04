import React from 'react'

var RepoItem = React.createClass({
	render: function() {
		return (
			<li><h4>{this.props.name}</h4><p>{this.props.description}</p></li>
		);
	}
});

var RepoList = React.createClass({
	render: function() {
		return (
			<ul>
				<RepoItem name='first' description='this is first repo' />
				<RepoItem name='second' description='this is second repo' />
			</ul>
		);
	}
});

export {RepoList}