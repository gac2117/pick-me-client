import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTag } from '../../actions/tagActions';

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
			<>
				<form onSubmit={(e) => this.handleSubmit(e)}>
				<input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
				<input type="submit" />
				</form>
			</>
		)
	}
}

export default connect(null, {newTag})(TagInput);