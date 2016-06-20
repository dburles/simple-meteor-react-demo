/* global ValidatedMethod, SimpleSchema */
import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

Items.schema = new SimpleSchema({
  createdAt: {
    type: Date,
  },
  text: {
    type: String,
    max: 500,
  },
  isChecked: {
    optional: true,
    type: Boolean,
  },
});

Items.attachSchema(Items.schema);

const insert = new ValidatedMethod({
  name: 'items.insert',
  validate: new SimpleSchema({
    text: { type: String },
  }).validator(),
  run({ text }) {
    Items.insert({
      createdAt: new Date(),
      text,
      isChecked: false,
    });
  },
});

const remove = new ValidatedMethod({
  name: 'items.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Items.remove(_id);
  },
});

const setChecked = new ValidatedMethod({
  name: 'items.setChecked',
  validate: new SimpleSchema({
    _id: { type: String },
    isChecked: { type: Boolean },
  }).validator(),
  run({ _id, isChecked }) {
    Items.update(_id, { $set: { isChecked } });
  },
});

export default Items;
export { insert, setChecked, remove };
