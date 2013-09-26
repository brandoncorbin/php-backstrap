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
		container : $('#app'),
		success : function(html) { 
			// Lets get a Partial for fun.
			View('partials/widget', {
				container : $('.widgets'),
				success : function() {
					API({
						action : 'sample',
						callback : function(data) {
							console.log(data);
						}
					});
				}
			});
		}
	});

});

app_router.on('route:otherpage', function() { 
	
	View('otherpage', {
		data : { name : 'Brandon'},
		layout : 'site',
		container : $('#app')
	});

});

app_router.on('route:partials', function() { 

	View('home', {
		data : { name : 'Brandon'},
		layout : 'site',
		container : $('#app'),
		success : function(html) { 
			// Lets get a Partial for fun.
			View('partials/widget', {
				container : $('.widgets')
			});
		}
	});

})

Backbone.history.start();



