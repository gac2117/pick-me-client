import React, {Component} from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {
	
	render() {

		const restaurantList = this.props.restaurants.map(r => {
			return (
				<p key={r.id}>{r.attributes.name}</p>
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