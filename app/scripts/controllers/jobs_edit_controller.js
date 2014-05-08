EmberQuartzAdmin.JobsEditController = Ember.ObjectController.extend({
  needs: 'jobs',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.jobs.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('jobs',this.get('model'));
    }
  }
});

