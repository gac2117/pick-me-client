import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import TagList from '../components/tags/TagList';
import { connect } from 'react-redux';

class TagContainer extends Component {

	render() {
		
		return (
			<>
				<br />
		
				<h3>Tags:</h3>
				<TagList 
				 tags={this.props.tags}
				 restaurantId={this.props.restaurant.id} />
				<br />
				Add Tags: 
				<TagInput restaurantId={this.props.restaurant.id} />
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	tags: state.tags.tags 
})

export default connect(mapStateToProps)(TagContainer);