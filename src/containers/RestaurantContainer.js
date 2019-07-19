import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import RestaurantList from '../components/restaurants/RestaurantList';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
	
	render() {
		return (
			<div>
				<RestaurantInput />
				<RestaurantList restaurants={this.props.restaurants} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newRestaurant: state.restaurants.item,
	restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RestaurantContainer);