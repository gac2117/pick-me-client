import React, { Component } from 'react';
import TagList from '../components/tags/TagList';
import TagInput from '../components/tags/TagInput';
import { connect } from 'react-redux';
import { fetchTags } from '../actions/tagActions';

class TagContainer extends Component {
	componentDidMount() {
		this.props.fetchTags()
	}

	render() {
		return (
			<>
				<TagInput restaurantId={this.props.restaurant.id} />
				<TagList tags={this.props.tags} restaurantId={this.props.restaurant.id} />
			</>
		)
	}
}

const mapStateToProps = state => ({
	tags: state.tags.tags 
})

export default connect(mapStateToProps, {fetchTags})(TagContainer);