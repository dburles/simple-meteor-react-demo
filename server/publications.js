import { Meteor } from 'meteor/meteor';
import Items from '/imports/collections/Items';

Meteor.publish('todos', function() {
  return Items.find({}, { sort: { createdAt: 1 } });
});
