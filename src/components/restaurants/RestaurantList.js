import React, {Component} from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurantActions' 

class RestaurantList extends Component {
	componentWillMount() {
		this.props.fetchRestaurants();
	}

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

const mapStateToProps = state => ({
	restaurants: state.restaurants.items,
	newRestaurant: state.restaurants.item,
})

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantList);