import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import RestaurantList from '../components/restaurants/RestaurantList';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
	render() {
		return (
			<div>
				<RestaurantInput addRestaurant={this.props.addRestaurant} />
				<RestaurantList restaurants={this.props.restaurants} />
			</div>
		)
	}
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => ({
	addRestaurant: info => dispatch({ type: 'ADD_RESTAURANT', info })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer)