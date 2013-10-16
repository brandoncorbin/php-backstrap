/***************************************
Global for PHPBackStrap
AUthor: Brandon Corbin
Email: code@icorbin.com
Date: Sept 18th 2013
***************************************/

/***************************************
View Maker
***************************************/

function View(path, options) {
	var callback = (options.success) ? options.success : function(data) { },
		data = (options.data) ? options.data :  { },
	 	layout =  (options.layout) ? options.layout :  null,
	 	path = path
	 	container = (options.container) ? options.container : null;

	$.get('views/'+path+'.html', function(html) {
		if(layout==null) {
			html = _.template(html, data);
			if(container!=null) {
				container.html(html);

			}
			callback(html);
			
		} else {
			data.body_content = _.template(html, data)
			if(layout!=null) {
				$.get('views/layouts/'+layout+'.html', function(layouthtml) { 
					html = _.template(layouthtml, data)
					if(container!=null) {
						container.html(html);
					}
					callback(html);
					
					$('body').addClass(layout).addClass(path);
				});
			} else {
				callback(data.body_content);
			}
			
		}
		
	});
}

/***************************************
Modal Maker
***************************************/

function modal(options) {
	var title = (options.title) ? options.title : "The Unknown Modal";
	var body = (options.body) ? options.body : "No Body Content";
	var primary_btn_label = (options.primary_btn_label) ? options.primary_btn_label : "The Unknown Modal";
	var modal = $('<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>One fine body&hellip;</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div></div>');
	$('.modal-title', modal).html(title);
	$('.modal-body', modal).html(body);
	$(modal).modal({ backdrop:false });

}

function API(options) {
	var callback = (options.callback) ? options.callback : function(response) { },
	 	type = (options.type) ? options.type : 'GET',
	 	action = (options.action) ? options.action : 'GET',
	 	data = (options.data) ? options.data : {};

	$.ajax({
		url : 'api/?action='+action,
		type : type,
		data : data,
		dataType : 'JSON',
		success : function(data) {
			callback(data, null);	
		},
		error : function() {
			callback(null, 'error');
		}
	})

}
