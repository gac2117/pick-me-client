import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import RestaurantList from '../components/restaurants/RestaurantList';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurantActions' 

 
class RestaurantContainer extends Component {

	componentWillMount() {
		this.props.fetchRestaurants();
	}

	render() {
		return (
			<div>
			 <h3>Add a Restaurant</h3>
			 <RestaurantInput />
			 <br />
			 <RestaurantList restaurants={this.props.restaurants} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items,
	newRestaurant: state.restaurants.item 
})

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantContainer);