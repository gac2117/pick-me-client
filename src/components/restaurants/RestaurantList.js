import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class RestaurantList extends Component {
	
	render() {

		const restaurantList = this.props.restaurants.map(r => {
			return (
				<li key={r.id}>
				<Link to={{
					pathname: '/restaurant',
					state: {restaurant: r}
				}}>{r.attributes.name}</Link></li>
			)
		})
		
		return(
			<>
				<h3>Current List of Restaurants:</h3>
				{restaurantList}
			</>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RestaurantList);