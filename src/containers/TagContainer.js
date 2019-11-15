import React, { Component } from 'react';
import TagInput from '../components/tags/TagInput';
import TagList from '../components/tags/TagList';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

class TagContainer extends Component {
  render() {
    return (
      <div className='Container'>
        <Card style={{ border: '1px solid #4F6367', borderRadius: '5px' }}>
          <CardHeader
            style={{ backgroundColor: '#7A9E9F', color: 'white' }}
            tag='h4'
          >
            Tags:
          </CardHeader>
          <CardBody>
            <TagList
              tags={this.props.tags}
              restaurantId={this.props.restaurant.id}
            />
            <TagInput restaurantId={this.props.restaurant.id} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags.tags
});

export default connect(mapStateToProps)(TagContainer);
