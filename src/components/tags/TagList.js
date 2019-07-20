import React, { Component } from 'react';
import Tag from './Tag';

class TagList extends Component {

	render() {
		const { tags, restaurantId } = this.props;
		// eslint-disable-next-line
		const ownTags = tags.filter(t => t.restaurant_id == restaurantId);
		const renderTags = ownTags.map(t => {
			return (
				<div key={t.id}>
					<Tag tag={t} />
				 </div>
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