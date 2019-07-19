import React, { Component } from 'react';
import TagList from '../components/tags/TagList';
import { connect } from 'react-redux';
import { fetchTags } from '../actions/tagActions';

class TagContainer extends Component {
	componentWillMount() {
		this.props.fetchTags();
	}

	render() {
		return (
			<>
				<TagList tags={this.props.tags} />
			</>
		)
	}
}

const mapStateToProps = state => ({
	tags: state.tags.tags 
})