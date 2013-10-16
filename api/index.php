<?php
// Load Requires
use HybridLogic\Validation\Validator;
use HybridLogic\Validation\Rule;
use Rain\Tpl;

require '../libs/vendor/autoload.php';
require_once('env.php'); // Load the $app variable

$mode = 'dev'; 
//$mode = 'prod';

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


/***************************************
Response Functions
----------------------------------------
url.com/api/?action=home 
will trigger the res_home() function
You can pass both GETS and POSTS to this page 
and they will be mermged in to a $req object
***************************************/

function res_default($app) {
	return array(
			'success'=>true,
			'message'=>'Welcome'
			);
}

/***************************************
/api/?action=sample
***************************************/
function res_sample($app) {
	return array(
		'date' => time(),
		'message' => 'Hi there!'
	);
}


/***************************************
Don't mess with this.
***************************************/
header("Content-Type:application/json");
echo json_encode($return);

