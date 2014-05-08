EmberQuartzAdmin.JobsRoute = Ember.Route.extend({
	actions:{
		trigger: function(job){
			$.post(EmberQuartzAdmin.serviceUrl + "/api/jobs/"+ job.get("Id")+ "/trigger").done(function(){
				alert('Job Triggered');
			});
			
		}

	},


  model: function(params) {
  	return Ember.$.getJSON(EmberQuartzAdmin.serviceUrl + "/api/jobs").then( function (data){
  		return data.jobs.map(function(job){

  			return EmberQuartzAdmin.Job.create(job);

  		});

  	});
  }
});

