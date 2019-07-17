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
			<h3>{restaurant.attributes.name}</h3>
			<p>{restaurant.attributes.location}</p>
			</div>
			));

		return (
			<div>
			 <h1>Restaurants</h1>
			 <RestaurantInput />
			 <br />
			 {restaurantList}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items
})

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantContainer);