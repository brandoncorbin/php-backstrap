var AppRouter = Backbone.Router.extend({
	routes: {
		"pay/:key" : "pay",
		"*actions": "defaultRoute"
	}
});
var app_router = new AppRouter;
app_router.on('route:pay', function(key) {
	
	$.getJSON('/service/?action=cart&key='+key, function(data) {
		var cart = data;
		$.get('/views/checkout.html', function(html) {
			$('#app').html(html);
			var token = function(res){
		        var $input = $('<input type=hidden name=stripeToken />').val(res.id);
		        $('form').append($input).submit();
		      };

		      StripeCheckout.open({
		        key:         'pk_cuTNPDO9CicNJU3SjqWVDkhU6fIII',
		        address:     true,
		        amount:      5000,
		        currency:    'usd',
		        name:        'Joes Pistachios',
		        description: 'A bag of Pistachios',
		        panelLabel:  'Checkout',
		        token:       token
		      });
		});

	});


}); // End /pay/id

app_router.on('route:defaultRoute', function(actions) {
 
}) 

Backbone.history.start();