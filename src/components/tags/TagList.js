import React, { Component } from 'react';
import Tag from './Tag';

class TagList extends Component {

	renderTags = (tags) => {
		if (!Array.isArray(tags) || !tags.length) {
			return null;
		} else {
			tags.map(t => {
				return (
				<>
				Tags: <Tag key={t.id} tag={t} />
				</>
				)
			})
		}
	}

	render() {
		const {tags} = this.props;

		return (
			<>
			{this.renderTags(tags)}
			</>
		)
		
	}
}

export default TagList;