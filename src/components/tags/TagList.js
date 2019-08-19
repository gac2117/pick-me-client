import React from 'react';
import Tag from './Tag';

const TagList = props => {
  // eslint-disable-next-line
  const ownTags = props.tags.filter(t => t.restaurant_id == props.restaurantId);

  const renderTags = ownTags.map(t => {
    return (
      <div key={t.id}>
        <Tag tag={t} />
      </div>
    );
  });

  return <>{renderTags}</>;
};

export default TagList;
