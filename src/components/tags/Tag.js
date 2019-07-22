import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTag } from '../../actions/tagActions';
import { Button } from 'reactstrap';

class Tag extends Component {

	handleClick() {
		this.props.deleteTag(this.props.tag.id);
	}

	render(){
		const {tag} = this.props;
		
		return (
			<>
				{tag.name}{'  '}
				<Button outline color="danger" size="sm" onClick={() => this.handleClick()}>X</Button>
			</>
		)
	}
}

export default connect(null, {deleteTag})(Tag);