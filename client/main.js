import React from 'react';
import { render } from 'react-dom';
import Todos from '/imports/containers/Todos';

Meteor.startup(() => render(<Todos />, document.getElementById('root')));
