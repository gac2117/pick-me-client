import React, {Component} from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
	
	render() {

		const restaurantList = this.props.restaurants.map(restaurant => {
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

export default Restaurants;