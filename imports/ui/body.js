import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';

Template.OneUI.onCreated(function() {
  Blaze._allowJavascriptUrls();
});

// Template.OneUI.helpers({

// });

// Template.OneUI.events({

// });


