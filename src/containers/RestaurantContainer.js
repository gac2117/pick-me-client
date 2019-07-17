import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
 
class RestaurantContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			restaurants: []
		}
		console.log(this.state)
	}

	componentWillMount() {
		fetch('http://localhost:3000/api/restaurants')
			.then(res => res.json())
			.then(data => this.setState({restaurants: data}));
	}

	render() {
		const restaurantList = this.state.restaurants.map(restaurant => (
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

export default RestaurantContainer;