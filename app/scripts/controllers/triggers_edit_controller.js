EmberQuartzAdmin.TriggersEditController = Ember.ObjectController.extend({
  needs: 'triggers',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.triggers.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('triggers',this.get('model'));
    }
  }
});

