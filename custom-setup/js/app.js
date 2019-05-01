//Step 1 - Create an application
//This object will contain all the functionality of our application
var app = Ember.Application.create({
        LOG_TRANSITIONS:true
});

app.ApplicationController = Ember.Controller.extend({
  firstName:"SkillBakery",
  lastName:"Studio"
});
