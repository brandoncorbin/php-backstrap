// require.config({
//   paths: {
//     'jquery': 'bower_components/jquery/jquery.min',
//     'underscore': 'bower_components/underscore/underscore',
//     'backbone': 'bower_components/backbone/backbone',
//     'bootstrap' : "bower_components/bootstrap/docs/assets/js/bootstrap.min"
//   }
// });


// require.config({
//   shim: {
//     underscore: {
//       exports: '_'
//     },
//     backbone: {
//       deps: ["underscore", "jquery"],
//       exports: "Backbone"
//     }
//   }
// });

//the "main" function to bootstrap your code
require(
	['bower_components/jquery/jquery.min', 
	  'bower_components/underscore/underscore', 
	  'bower_components/backbone/backbone',
	  'bower_components/bootstrap/dist/js/bootstrap.min',
	  'views/app'
	 ], function ($, _, Backbone, Bootstrap) {   // or, you could use these deps in a separate module using define

});

