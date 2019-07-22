import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTag } from '../../actions/tagActions';
import {Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class TagInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: ''
		};
	}

	handleChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		const info = {
			name: this.state.name, 
			restaurant_id: this.props.restaurantId
		}

		this.props.newTag(info);

		this.setState({
			name: ''
		});
	};

	render() {
		return (
			<div className="Container">
			<h5>Add Tags: </h5>
				<Form onSubmit={(e) => this.handleSubmit(e)}>
					<input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />{'   '}
					<Button size="sm">Add</Button>
				</Form>
			</div>
		)
	}
}

export default connect(null, {newTag})(TagInput);