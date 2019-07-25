import React from 'react';
import Tag from './Tag';

function TagList({tags, restaurantId}) {

		// eslint-disable-next-line
		const ownTags = tags.filter(t => t.restaurant_id == restaurantId);

		const renderTags = ownTags.map(t => {
		  return (
				<Tag key={t.id} tag={t} />
		  )
		})

		return (
			<>
				{renderTags}
			</>
		)
	
}

export default TagList;