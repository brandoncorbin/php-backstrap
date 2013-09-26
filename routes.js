var AppRouter = Backbone.Router.extend({
	routes: {
		"otherpage" 	: "otherpage",
		""				: "home"
	}
});
var app_router = new AppRouter;


app_router.on('route:home', function() { 
	
	View('home', {
		data : { name : 'Brandon'},
		layout : 'site',
		container : $('#app')
	});

});

app_router.on('route:otherpage', function() { 
	
	View('otherpage', {
		data : { name : 'Brandon'},
		layout : 'site',
		container : $('#app')
	});

});

Backbone.history.start();



