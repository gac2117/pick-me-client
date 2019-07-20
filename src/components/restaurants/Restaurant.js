import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../actions/restaurantActions'; 
import TagContainer from '../../containers/TagContainer'

class Restaurant extends Component {

	handleClick() {
		this.props.deleteRestaurant(this.props.location.state.restaurant.id);
	}

	render() {
		const {restaurant} = this.props.location.state

		return (	
			<>
				<h1>Restaurant Details:</h1>
				<h3>Name: {restaurant.attributes.name}
				<br />
				Location: {restaurant.attributes.location}</h3>
				<button onClick={() => this.handleClick()}>Delete Restaurant</button>
				
				<TagContainer restaurant={restaurant} />
			</>
		)
	}
}


export default connect(null, {deleteRestaurant})(Restaurant);