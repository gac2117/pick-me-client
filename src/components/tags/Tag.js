import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTag} from '../../actions/tagActions';

class Tag extends Component {

	handleClick() {
		this.props.deleteTag(this.props.tag.id);
	}

	render(){
		const {tag} = this.props;
		
		return (
			<>
				<p>{tag.name}
				<button onClick={() => this.handleClick()}>X</button>
				</p>
			</>
		)
	}
}

export default connect(null, {deleteTag})(Tag);