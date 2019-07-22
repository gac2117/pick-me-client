import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../actions/restaurantActions'; 
import TagContainer from '../../containers/TagContainer'
import { Card, CardBody, CardTitle, CardHeader, CardSubtitle, Button } from 'reactstrap';

class Restaurant extends Component {

	handleClick() {
		this.props.deleteRestaurant(this.props.location.state.restaurant.id);
		const path = `/restaurants`;
		this.props.history.push(path);
	}

	render() {
		const {restaurant} = this.props.location.state
		return (	
			<div className="Container">
				<Card>
					<CardHeader tag="h3">{restaurant.attributes.name}</CardHeader>
					<CardBody>
					<CardTitle tag="h4">Location: {restaurant.attributes.location}</CardTitle>
					<br />
					<Button color="danger" size="sm" onClick={() => this.handleClick()}>Delete Restaurant</Button>
					<TagContainer restaurant={restaurant} />
					</CardBody>
				</Card>
			</div>
		)
	}
}


export default connect(null, {deleteRestaurant})(Restaurant);