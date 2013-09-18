var AppRouter = Backbone.Router.extend({
	routes: {
		"": "home"
	}
});
var app_router = new AppRouter;


app_router.on('route:home', function() { 
	
	View('home', {
		data : { name : 'Brandon'},
		layout : 'site',
		success : function(results) {
			$('#app').append(results);
		}
	});

});

Backbone.history.start();



