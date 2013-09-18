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
	var layout =  (options.layout) ? options.layout :  null;
	$.get('views/'+path+'.html', function(html) {
		if(layout==null) {
			callback(_.template(html, data));	
		} else {
			data.body_content = _.template(html, data)
			$.get('views/layouts/'+layout+'.html', function(layouthtml) { 
				callback(_.template(layouthtml, data));
			});
		}
		
	});
}