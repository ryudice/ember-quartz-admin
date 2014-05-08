var EmberQuartzAdmin = window.EmberQuartzAdmin = Ember.Application.create();

EmberQuartzAdmin.serviceUrl = "http://localhost:3001";


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
