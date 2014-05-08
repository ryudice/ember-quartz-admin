EmberQuartzAdmin.TriggersRoute = Ember.Route.extend({
	actions:{
		resume: function(trigger){
			$.post(EmberQuartzAdmin.serviceUrl + "/api/triggers/"+ trigger.get("Id")+ "/resume").done(function(){
				alert('Trigger was resumed');
			});

		}

	},
  model: function(params) {
    return $.getJSON(EmberQuartzAdmin.serviceUrl + "/api/triggers").then(function(data){
    	return data.triggers.map(function(trigger){
    		return EmberQuartzAdmin.Trigger.create(trigger);
    	});

    })
  }
});

