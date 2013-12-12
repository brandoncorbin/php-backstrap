<?php 
$app = (object)array(
	'env'=>$env[$mode],
	'inputs'=>$_REQUEST,
	'action'=>strip_tags(trim(strtolower((array_key_exists("action", $_REQUEST)) ? $_REQUEST['action'] : "default"))),
	'paths'=>(object)array(
		'root'=>dirname($_SERVER['SCRIPT_FILENAME'])."/../",
		'vendor'=>dirname($_SERVER['SCRIPT_FILENAME'])."/../libs/vendor/",
		'bower'=>dirname($_SERVER['SCRIPT_FILENAME'])."/../libs/bower/",
		'api'=>dirname($_SERVER['SCRIPT_FILENAME'])."/../api/"
	)
);

if(function_exists('res_'.$app->action)) {
	$return = call_user_func('res_'.$app->action, $app);
} else {
	if(function_exists('res_default')) {
		$return = res_default($app);	
	} else {
		$return = array();
	}
}