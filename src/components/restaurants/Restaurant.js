import React, { Component } from 'react';

class Restaurant extends Component {
	render() {
		return (
			<>
			<ul>
				<li>
					{this.props.restaurant.attributes.name} at {this.props.restaurant.attributes.location}
				</li>
				</ul>
			</>
		)
	}
}

export default Restaurant;