import React, { PropTypes } from 'react';
import Item from './Item';

function List(props) {
  const {
    loading,
    items,
    onRemove,
  } = props;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (items.length === 0) {
    return (
      <p>No Items</p>
    );
  }

  return (
    <ul>
      {items.map(({ _id, text, isChecked }) => (
        <Item
          _id={_id}
          key={_id}
          text={text}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default List;
