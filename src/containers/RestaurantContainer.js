import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurantActions' 

 
class RestaurantContainer extends Component {

	componentWillMount() {
		this.props.fetchRestaurants();
	}

	render() {
		const restaurantList = this.props.restaurants.map(restaurant => (
			<div key={restaurant.id}>
			<p>{restaurant.attributes.name} at {restaurant.attributes.location}</p>
			</div>
			));

		return (
			<div>
			 <h3>Add a Restaurant</h3>
			 <RestaurantInput />
			 <br />
			 <h3>List of Restaurants:</h3>
			 {restaurantList}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items,
	newRestaurant: state.restaurants.item 
})

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantContainer);