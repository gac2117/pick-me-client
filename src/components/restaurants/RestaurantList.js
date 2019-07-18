import React, {Component} from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends Component {
	render() {
		const {restaurants} = this.props;
		const restaurantList = restaurants.map(restaurant => {
			return (
				<Restaurant key={restaurant.id}
				restaurant={restaurant}
				/>
			)
		})

		return(
			<>
			<h3>List of Restaurants:</h3>
			{restaurantList}
			</>
		)
	}
}

export default RestaurantList;