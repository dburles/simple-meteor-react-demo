import React, { PropTypes } from 'react';
import Add from './Add';
import List from './List';

function Todos(props) {
  const {
    loading,
    items,
    onSubmit,
    onRemove,
  } = props;

  return (
    <div>
      <Add onSubmit={onSubmit} />
      <List
        loading={loading}
        items={items}
        onRemove={onRemove}
      />
    </div>
  );
}

Todos.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Todos;
