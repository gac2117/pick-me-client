import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import TagList from '../components/tags/TagList';

class TagContainer extends Component {

	render() {
		return (
			<><TagList tags={this.props.restaurant.attributes.tags} restaurantId={this.props.restaurant.id} />
			<TagInput restaurantId={this.props.restaurant.id} />
			
			</>
		)
	}
}

export default TagContainer;