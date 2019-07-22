import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newRestaurant } from '../../actions/restaurantActions'; 
import {Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class RestaurantInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			location: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		const info = {
			name: this.state.name,
			location: this.state.location
		}

		this.props.newRestaurant(info);
		
		this.setState({
			name: '',
			location: ''
		});
	}

	render() {
		return(
			<div className="Container">
				<h3>Add a Restaurant</h3>
				<br />
				<Form onSubmit={(e) => this.handleSubmit(e)} >
					<FormGroup row>
						<Label for="name" sm={4}>Restaurant Name: </Label>
						<Col sm={7}>
							<Input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="location" sm={4}>Restaurant Location: </Label>
						<Col sm={7}>
							<Input type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
						</Col>
					</FormGroup>
			        <FormGroup row>
			          <Col sm={12}>
			            <Button className="float-center">Add Restaurant</Button>
			          </Col>
			        </FormGroup>
				</Form>
			</div>
		)
	}
}

export default connect(null, {newRestaurant})(RestaurantInput);