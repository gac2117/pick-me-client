import React, { Component } from 'react';
import Tag from './Tag';

class TagList extends Component {

	render() {
		const { tags, restaurantId } = this.props;
		const ownTags = tags.filter(t => t.restaurant_id == restaurantId);
		const renderTags = ownTags.map(t => {
			return (
				<Tag key={t.id}
				 tag={t} />
			)
		})

		return (
			<>
				{renderTags}
			</>
		)
		
	}
}

export default TagList;