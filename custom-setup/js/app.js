//Step 1 - Create an application
//This object will contain all the functionality of our application
var app = Ember.Application.create({
        LOG_TRANSITIONS:true
});

app.Router.map(function() {
  this.route('about', { path:'/about-us' });
});

app.ApplicationController = Ember.Controller.extend({
  isCompany: true,
  hasWebsite: true,
  firstName: "April",
  lastName: "Brown",
  caption: "Start Learning Today",
  isDisabled: false,
  color:"colortext",
  actions: {
    displayAlert: function(id) {
      alert("Button Alert is clicked");
      this.set('firstName', 'Olivia');
    }
  }
});

Ember.TextField.reopen({
  attributeBindings: ['data-toggle', 'data-placement']
});
