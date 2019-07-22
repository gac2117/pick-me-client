import React, { Component } from 'react';
import Tag from './Tag';
import { Button } from 'reactstrap'

class TagList extends Component {

	render() {
		const { tags, restaurantId } = this.props;
		// eslint-disable-next-line
		const ownTags = tags.filter(t => t.restaurant_id == restaurantId);
		const renderTags = ownTags.map(t => {
			return (
				<>
					<Button color="info" size="sm" disabled key={t.id}>
						<Tag tag={t} />
					</Button>{'   '}
				</>
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