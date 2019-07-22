import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import TagList from '../components/tags/TagList';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

class TagContainer extends Component {

	render() {
		return (
			<div className="Container">
				<Card>
					<CardHeader tag="h3">Tags:</CardHeader>
					<CardBody>
						<TagList 
						  tags={this.props.tags}
						  restaurantId={this.props.restaurant.id} />
						<TagInput restaurantId={this.props.restaurant.id} />
					</CardBody>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	tags: state.tags.tags 
})

export default connect(mapStateToProps)(TagContainer);