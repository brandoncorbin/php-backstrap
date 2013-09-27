<?php
// Load Requires
require '../libs/vendor/autoload.php';
use HybridLogic\Validation\Validator;
use HybridLogic\Validation\Rule;

$action = (array_key_exists("action", $_REQUEST)) ? $_REQUEST['action'] : "default";
$action = strip_tags(trim(strtolower($action)));
$inputs = $_REQUEST;

// Check if a function exists for this request
if(function_exists('res_'.$action)) {
	// It exists, lets call it and pass the inputs
	$return = call_user_func('res_'.$action, $inputs);
} else {
	// It doesn't exist, lets call the default
	$return = req_default($inputs);
}

/***************************************
Response Functions
----------------------------------------
url.com/service/?action=home 
will trigger the res_home() function
You can pass both GETS and POSTS to this page 
and they will be mermged in to a $req object
***************************************/

function res_default($req) {
	return array(
			'success'=>true,
			'message'=>'Welcome'
			);
}

function res_sample($req) {
	return array(
		'date' => time(),
		'message' => 'Hi there!'
	);
}



header("Content-Type:application/json");
echo json_encode($return);

