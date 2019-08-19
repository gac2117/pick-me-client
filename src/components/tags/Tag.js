import React from 'react';
import { deleteTag } from '../../actions/tagActions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Tag = props => {
  const handleClick = () => {
    props.deleteTag(props.tag.id);
  };

  return (
    <div>
      {props.tag.name}
      {'  '}
      <Button outline color='danger' size='sm' onClick={handleClick}>
        X
      </Button>
      {'     '}
    </div>
  );
};

export default connect(
  null,
  { deleteTag }
)(Tag);
