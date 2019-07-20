import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import TagList from '../components/tags/TagList';
import { connect } from 'react-redux';

class TagContainer extends Component {

	state = {
		restaurant: {}
	}

	renderTagList = (tags) => {
		if (!Array.isArray(tags) || !tags.length) {
			return null;
		} else {
			return (
				<>
				<TagList tags={this.props.restaurant.attributes.tags} />
				</>
			)
		}
	}

	findRestaurant = (id) => {
		this.props.restaurants.map(r => {
			if (r.id === id) {
				this.setState({
					restaurant: r
				})
			} else {
				return null;
			}
		})
	}

	render() {
		console.log(this.props.restaurant.id)
		return (
			<>
			<br />
			{this.findRestaurant(this.props.restaurant.id)}
			<h3>Tags:</h3>
			{this.renderTagList(this.props.restaurant.attributes.tags)}
			<br />
			Add Tags: <TagInput restaurantId={this.props.restaurant.id} />
			</>
		)
	}
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.items
})

export default TagContainer;