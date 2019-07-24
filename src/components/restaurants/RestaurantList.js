import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RestaurantList({restaurants}){
	console.log({restaurants})

	const restaurantList = restaurants.map(r => {
		return (
			<ListGroupItem 
			  key={r.id} 
			  tag={Link} 
			  to={{
				pathname: '/restaurant',
				state: {restaurant: r}
			}} action>{r.attributes.name}</ListGroupItem>
		)
	})
		
	return(
		<div className="Container">
			<h3>Current List of Restaurants:</h3>
			<br />
			<ListGroup style={{ border: '1px solid #4F6367', borderRadius: '5px'}}>
		   		{restaurantList}  
	    	</ListGroup>
		</div>
	)	
}

function mapStateToProps(state) {
	return {restaurants: state.restaurants.items};
}

export default connect(mapStateToProps)(RestaurantList);