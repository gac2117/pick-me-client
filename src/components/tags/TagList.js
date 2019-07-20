import React, { Component } from 'react';
import Tag from './Tag';

class TagList extends Component {
	render() {
		const {tags} = this.props;

		const renderTags = tags.map(t => {
			return (
				<>
				Tags: <Tag key={t.id} tag={t} />
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