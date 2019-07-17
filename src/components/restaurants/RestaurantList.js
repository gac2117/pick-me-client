import React, {Component} from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends Component{
	render() {
		const { restaurants } = this.props;
		const listOfRestaurants = restaurants.map(restaurant => {
			return (
				<Restaurant
				  key={1}
				  restaurant={restaurant}
				/>
			)
		});
		return(
			<>
			<h3>List of Restaurants</h3>
			<ul>
			{listOfRestaurants}
			</ul>
			</>
		)
	}
}

export default RestaurantList;