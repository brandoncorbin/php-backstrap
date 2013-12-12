<?php
// Load Requires
use HybridLogic\Validation\Validator;
use HybridLogic\Validation\Rule;
use Rain\Tpl;


$mode = 'dev'; // prod or dev
require '../libs/vendor/autoload.php';
require 'env.php'; 
require 'boot.php';

//$mode = 'prod';



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

