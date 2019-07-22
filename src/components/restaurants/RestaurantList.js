import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class RestaurantList extends Component {
	
	render() {

		const restaurantList = this.props.restaurants.map(r => {
			return (
				<ListGroupItem tag={Link} to={{
					pathname: '/restaurant',
					state: {restaurant: r}
				}} action>{r.attributes.name}</ListGroupItem>
			)
		})
		
		return(
			<div className="Container">
				<h3>Current List of Restaurants:</h3>
				<br />
				<ListGroup>
			   		{restaurantList}  
		    	</ListGroup>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RestaurantList);