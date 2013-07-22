<?
require '../vendor/autoload.php';
$action = (array_key_exists("action", $_REQUEST)) ? $_REQUEST['action'] : "default";
$inputs = $_REQUEST;

header("Content-Type:application/json");
switch($action) {

	case "default" : 

		$return = [
			'success'=>true,
			'message'=>'Welcome'
		];

	break; // default

	case "cart" : 

		$input = (array_key_exists("key", $inputs)) ? $inputs['key'] : null;

		if($input==null) {
			$return = [
				'success' => false,
				'message' => 'Missing key'
			];
		} else {
		
		}


	break; // cart

	case "test" : 

		$return = [
			'success'=>true,
			'message'=>'Welcome'
		];

	break; // test

	default : 

		$return = [
			'success'=>false,
			'message'=>'Action not found'
		];

	break;

}

echo json_encode($return);

