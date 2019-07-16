import React, { Component } from 'react';
import RestaurantList from '../components/restaurants/RestaurantList';

class RestaurantContainer extends Component {
	render() {
		return (
			<div>
				<RestaurantList />
			</div>
		)
	}
}

export default RestaurantContainer;