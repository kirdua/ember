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

app.ApplicationView = Ember.View.extend({
  templateName: 'application',
  name: 'test'
});

//creating model
app.Course = DS.Model.extend({
  title:DS.attr(),
  price:DS.attr("number"),
  description:DS.attr("string"),
  image:DS.attr("string"),
  summary: function(){
    return this.get('title') + ' ' + this.get('description');
  }.property('title', 'description')
});

app.IndexRoute = Ember.Route.extend({
  model: function() {
    this.store.push('course', {
      id: "1",
      title: "Master Ember.js",
      price: 69,
      description: "Learn Ember.js from scratch"
    });

    this.store.push('course', {
      id: "2",
      title: "Master React.js",
      price: 69,
      description: "Learn React.js from scratch"
    });

    return this.store.find('course', 2);
  }
});

Ember.TextField.reopen({
  attributeBindings: ['data-toggle', 'data-placement']
});
