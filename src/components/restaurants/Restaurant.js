import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../actions/restaurantActions'; 
import TagContainer from '../../containers/TagContainer'

class Restaurant extends Component {

	handleClick() {
		this.props.deleteRestaurant(this.props.restaurant.id);
	}

	render() {
		const {restaurant} = this.props;
		const tags = restaurant.attributes.tags.map(t => t.name)
		return (	
			<>
			<p>{restaurant.attributes.name} at {restaurant.attributes.location}
			  <button onClick={() => this.handleClick()}>delete</button>
			</p>
			  Tags: {tags}
			 <TagContainer restaurant={restaurant} />
			</>
		)
	}
}


export default connect(null, {deleteRestaurant})(Restaurant);