import React from 'react';
import { connect } from 'react-redux';
import { deleteTag } from '../../actions/tagActions';
import { Button } from 'reactstrap';

const Tag = ({ tag, deleteTag }) => {

	const handleClick = () => {
		deleteTag(tag.id);
	};
		
		return (
			<>
				{tag.name}{'  '}
				<Button 
				 outline color="danger" 
				 size="sm" 
				 onClick={handleClick}>X</Button>
				{'   '}
			</>
		)
	
}

export default connect(null, {deleteTag})(Tag);