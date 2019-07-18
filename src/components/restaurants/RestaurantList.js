import React from 'react';
import Restaurant from './Restaurant';

const RestaurantList = props => {
	const restaurants = props.restaurants.map(restaurant =>
		(
			<div key={restaurant.id}>
			<p>{restaurant.attributes.name} at {restaurant.attributes.location}</p>
			</div>
		));

	return (
		<>
		<h3>List of Restaurants:</h3>
		{restaurants}
		</>
	)
}

export default RestaurantList;