var AppRouter = Backbone.Router.extend({
	routes: {
		"": "home"
	}
});
var app_router = new AppRouter;


app_router.on('route:home', function() { 
	
	View('home', {
		data : { name : 'Brandon'},
		success : function(results) {
			$('#app').append(results);
		}
	});

});

Backbone.history.start();

function modal(options) {
	var title = (options.title) ? options.title : "The Unknown Modal";
	var body = (options.body) ? options.body : "No Body Content";
	var primary_btn_label = (options.primary_btn_label) ? options.primary_btn_label : "The Unknown Modal";
	var modal = $($('#modal-template').html());
	$('.modal-title', modal).html(title);
	$('.modal-body', modal).html(body);
	$(modal).modal({ backdrop:false });

}

function View(path, options) {
	var callback = (options.success) ? options.success : function(data) { };
	var data = (options.data) ? options.data :  { };
	$.get('views/'+path+'.html', function(html) {
		callback(_.template(html, data));
	});
}

