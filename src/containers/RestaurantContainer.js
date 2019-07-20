import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RestaurantContainer extends Component {
	
	render() {
		return (
			<>
				<RestaurantInput />
				<br />
				<Link to={{
					pathname: '/restaurant',
					state: {restaurant: this.props.restaurant}
				}}>{this.props.restaurant.attributes.name}</Link>
			</>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items,
	restaurant: state.restaurants.item
})

export default connect(mapStateToProps)(RestaurantContainer);