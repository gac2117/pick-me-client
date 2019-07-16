import React, { Component } from 'react';

class Restaurant extends Component {
	render() {
		const { restaurant } = this.props;
		return (
			<li>
			{restaurant.name}
			{restaurant.location}
			</li>
		)
	}
}

export default Restaurant;