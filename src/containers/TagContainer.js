import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import { connect } from 'react-redux';

class TagContainer extends Component {

	render() {
		return (
			<>
			<TagInput restaurantId={this.props.restaurant.id} />
			</>
		)
	}
}

export default connect(mapStateToProps)(TagContainer);