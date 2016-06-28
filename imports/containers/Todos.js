import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Todos from '../components/Todos';
import Items, { insert, setChecked, remove } from '../collections/Items';

function handleSubmit(text) {
  const data = {
    text,
  };

  insert.call(data, (error, response) => {
    if (error) {
      console.log(error);
    }
    // success!
  });
}

function handleChecked(_id, isChecked) {
  const data = {
    _id,
    isChecked,
  };

  console.log(data);

  setChecked.call(data, (error, response) => {
    if (error) {
      console.log(error);
    }
    // success!
  });
}

function handleRemove(_id) {
  const data = {
    _id,
  };

  remove.call(data, (error, response) => {
    if (error) {
      console.log(error);
    }
    // success!
  });
}

const TodosContainer = createContainer(() => {
  const todosHandle = Meteor.subscribe('todos');
  const loading = ! todosHandle.ready();
  const items = Items.find({}, { sort: { createdAt: 1 } }).fetch();

  return {
    loading,
    items,
    onSubmit: handleSubmit,
    onCheck: handleChecked,
    onRemove: handleRemove,
  };
}, Todos);

export default TodosContainer;
