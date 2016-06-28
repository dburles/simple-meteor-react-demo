import React, { PropTypes } from 'react';

function Item(props) {
  const {
    _id,
    text,
    isChecked,
    onCheck,
    onRemove,
  } = props;

  return (
    <li>
      <input
        type="checkbox"
        onChange={(event) => onCheck(_id, event.target.checked)}
        checked={isChecked}
      />
      &nbsp;{text} - <input type="button" value="x" onClick={() => onRemove(_id)} />
    </li>
  );
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;
