import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../actions/restaurantActions'; 
import TagContainer from '../../containers/TagContainer'
import { Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';

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
				<Card style={{ border: '1px solid #4F6367', borderRadius: '5px'}}>
					<CardHeader style={{backgroundColor: '#7A9E9F', color: 'white'}} tag="h3">Restaurant Details:</CardHeader>
					<CardBody>
						<CardTitle tag="h4">Name: {restaurant.attributes.name}</CardTitle>
						<CardTitle tag="h4">Location: {restaurant.attributes.location}</CardTitle>
						<br />
						<Button style={{backgroundColor: '#FE5F55'}} size="sm" onClick={() => this.handleClick()}>Delete Restaurant</Button>
						<TagContainer restaurant={restaurant} />
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default connect(null, {deleteRestaurant})(Restaurant);