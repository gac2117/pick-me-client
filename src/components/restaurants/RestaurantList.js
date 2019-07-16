import React, {Component} from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends Component{
	render() {
		const { restaurants } = this.props;
		const listOfRestaurants = restaurants.map(restaurant => {
			return (
				<Restaurant
				  key={1}
				  name={restaurant.name}
				  location={restaurant.location}
				/>
			)
		});
		return(
			<ul>
			{listOfRestaurants}
			</ul>
		)
	}
}

export default RestaurantList;