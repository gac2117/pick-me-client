import React, { Component } from 'react';

class Restaurant extends Component {
	render() {
		const { restaurant } = this.props;
		return (
			<div>
			<li>
			{restaurant.name} at {restaurant.location}
			</li>
			</div>
		)
	}
}

export default Restaurant;