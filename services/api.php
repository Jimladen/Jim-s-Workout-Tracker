<?php
 	require_once("Rest.inc.php");
	
	class API extends REST {
	
		public $data = "";
		
		const DB_SERVER = "localhost";
		const DB_USER = "root";
		const DB_PASSWORD = "root";
		const DB = "angularcode_customer";

		private $db = NULL;
		private $mysqli = NULL;
		public function __construct(){
			parent::__construct();				// Init parent contructor
			$this->dbConnect();					// Initiate Database connection
		}
		
		
		/*
		 *  Connect to Database
		*/
		private function dbConnect(){
			$this->mysqli = new mysqli(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);
		}
		
		/*
		 * Dynmically call the method based on the query string
		 */
		public function processApi(){
			$func = strtolower(trim(str_replace("/","",$_REQUEST['x'])));
			
			if((int)method_exists($this,$func) > 0)
				$this->$func();
			else
				$this->response('',404); // If the method not exist with in this class "Page not found".
		} // processApi()
				
		private function login(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}
			$email = $this->_request['email'];		
			$password = $this->_request['pwd'];
			if(!empty($email) and !empty($password)){
				if(filter_var($email, FILTER_VALIDATE_EMAIL)){
					$query="SELECT uid, name, email FROM users WHERE email = '$email' AND password = '".md5($password)."' LIMIT 1";
					$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);

					if($r->num_rows > 0) {
						$result = $r->fetch_assoc();	
						// If success everythig is good send header as "OK" and user details
						$this->response($this->json($result), 200);
					}
					$this->response('', 204);	// If no records "No Content" status
				}
			}
			
			$error = array('status' => "Failed", "msg" => "Invalid Email address or Password");
			$this->response($this->json($error), 400);
		}
		
		private function customers(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$query="SELECT distinct c.customerNumber, c.customerName, c.email, c.address, c.city, c.state, c.postalCode, c.country FROM angularcode_customers c order by c.customerNumber desc";
			$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);

			if($r->num_rows > 0){
				$result = array();
				while($row = $r->fetch_assoc()){
					$result[] = $row;
				}
				$this->response($this->json($result), 200); // send user details
			}
			$this->response('',204);	// If no records "No Content" status
		} // customers
		private function customer(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$id = (int)$this->_request['id'];
			if($id > 0){	
				$query="SELECT distinct c.customerNumber, c.customerName, c.email, c.address, c.city, c.state, c.postalCode, c.country FROM angularcode_customers c where c.customerNumber=$id";
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				if($r->num_rows > 0) {
					$result = $r->fetch_assoc();	
					$this->response($this->json($result), 200); // send user details
				}
			}
			$this->response('',204);	// If no records "No Content" status
		}
		
		private function insertCustomer(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}

			$customer = json_decode(file_get_contents("php://input"),true);
			$column_names = array('customerName', 'email', 'city', 'address', 'country');
			$keys = array_keys($customer);
			$columns = '';
			$values = '';
			foreach($column_names as $desired_key){ // Check the customer received. If blank insert blank into the array.
			   if(!in_array($desired_key, $keys)) {
			   		$$desired_key = '';
				}else{
					$$desired_key = $customer[$desired_key];
				}
				$columns = $columns.$desired_key.',';
				$values = $values."'".$$desired_key."',";
			}
			$query = "INSERT INTO angularcode_customers(".trim($columns,',').") VALUES(".trim($values,',').")";
			if(!empty($customer)){
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Customer Created Successfully.", "data" => $customer);
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	//"No Content" status
		}
		private function updateCustomer(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}
			$customer = json_decode(file_get_contents("php://input"),true);
			$id = (int)$customer['id'];
			$column_names = array('customerName', 'email', 'city', 'address', 'country');
			$keys = array_keys($customer['customer']);
			$columns = '';
			$values = '';
			foreach($column_names as $desired_key){ // Check the customer received. If key does not exist, insert blank into the array.
			   if(!in_array($desired_key, $keys)) {
			   		$$desired_key = '';
				}else{
					$$desired_key = $customer['customer'][$desired_key];
				}
				$columns = $columns.$desired_key."='".$$desired_key."',";
			}
			$query = "UPDATE angularcode_customers SET ".trim($columns,',')." WHERE customerNumber=$id";
			if(!empty($customer)){
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Customer ".$id." Updated Successfully.", "data" => $customer);
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	// "No Content" status
		}
		
		private function deleteCustomer(){
			if($this->get_request_method() != "DELETE"){
				$this->response('',406);
			}
			$id = (int)$this->_request['id'];
			if($id > 0){				
				$query="DELETE FROM angularcode_customers WHERE customerNumber = $id";
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Successfully deleted one record.");
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	// If no records "No Content" status
		}





		/*

		Products 

		*/

		private function products(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$query="SELECT distinct c.productNumber, c.productName, c.productDescription, c.productStock FROM products c order by c.productNumber desc";
			$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);

			if($r->num_rows > 0){
				$result = array();
				while($row = $r->fetch_assoc()){
					$result[] = $row;
				}
				$this->response($this->json($result), 200); // send user details
			}
			$this->response('',204);	// If no records "No Content" status
		} // products

		private function product(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$id = (int)$this->_request['id'];
			if($id > 0){	
				$query="SELECT distinct c.productNumber, c.productName, c.productDescription, c.productStock FROM products c where c.productNumber=$id";
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				if($r->num_rows > 0) {
					$result = $r->fetch_assoc();	
					$this->response($this->json($result), 200); // send product details
				}
			}
			$this->response('',204);	// If no records "No Content" status
		} // product


		private function insertProduct(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}

			$product = json_decode(file_get_contents("php://input"),true);
			$column_names = array('productName', 'productDescription', 'productStock');
			$keys = array_keys($product);
			$columns = '';
			$values = '';
			foreach($column_names as $desired_key){ // Check the product received. If blank insert blank into the array.
			   if(!in_array($desired_key, $keys)) {
			   		$$desired_key = '';
				}else{
					$$desired_key = $product[$desired_key];
				}
				$columns = $columns.$desired_key.',';
				$values = $values."'".$$desired_key."',";
			}
			$query = "INSERT INTO products(".trim($columns,',').") VALUES(".trim($values,',').")";
			if(!empty($product)){
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Product Created Successfully.", "data" => $product);
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	//"No Content" status
		}


		private function updateProduct(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}
			$product = json_decode(file_get_contents("php://input"),true);
			$id = (int)$product['id'];
			$column_names = array('productName', 'email', 'city', 'address', 'country');
			$keys = array_keys($product['product']);
			$columns = '';
			$values = '';
			foreach($column_names as $desired_key){ // Check the product received. If key does not exist, insert blank into the array.
			   if(!in_array($desired_key, $keys)) {
			   		$$desired_key = '';
				}else{
					$$desired_key = $product['product'][$desired_key];
				}
				$columns = $columns.$desired_key."='".$$desired_key."',";
			}
			$query = "UPDATE products SET ".trim($columns,',')." WHERE productNumber=$id";
			if(!empty($product)){
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Products ".$id." Updated Successfully.", "data" => $product);
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	// "No Content" status
		}


		private function deleteProduct(){
			if($this->get_request_method() != "DELETE"){
				$this->response('',406);
			}
			$id = (int)$this->_request['id'];
			if($id > 0){				
				$query="DELETE FROM products WHERE productNumber = $id";
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				$success = array('status' => "Success", "msg" => "Successfully deleted one record.");
				$this->response($this->json($success),200);
			}else
				$this->response('',204);	// If no records "No Content" status
		}


		/* 

		Workouts

		*/

		private function workouts(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$query="SELECT distinct c.workoutNumber, c.workoutName FROM workouts c order by c.workoutNumber desc";
			$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);

			if($r->num_rows > 0){
				$result = array();

				$i = 0;
				

				while($row = $r->fetch_assoc()){
				
					$result[] = $row;


					if ($row['workoutNumber']) {
						$workoutNumber = $row['workoutNumber'];

						//echo ' workoutNumber ' . $workoutNumber;

						$exerciseQuery = "SELECT * FROM exercises WHERE workoutNumber = $workoutNumber";

						$rt = $this->mysqli->query($exerciseQuery) or die ($this->mysqli->error.__LINE__);

						if ($rt->num_rows > 0){
							$j = 0;
							$exerciseResult = array(); 
							while($row = $rt->fetch_assoc()){

								$result[$i]['exercises'][] = $row;

								if($row['exercise_id']) {
									$exercise_id = $row['exercise_id'];

									$exerciseDataQuery = "SELECT * FROM exercise_data WHERE exercise_id = $exercise_id";
									$red = $this->mysqli->query($exerciseDataQuery) or die ($this->mysqli->error.__LINE__);

									if ($red->num_rows > 0) {

										$exerciseDataResult = array();
										while($row = $red->fetch_assoc()) {
											$result[$i]['exercises'][$j]['exercise_data'][] = $row;
											//echo 'J: ' . $j . ' ' ;
										}
									}
									
								}

								//echo ' i ' . $i;

								//print_r($result[$i]['exercises'] );
								//print_r($row);

								$j++; 

							} // while $rt
						} // if $rt 

					

						else {
							$result[$i]['exercises'] = array();
						}
						
					}

					//echo $workoutNumber;


					$i++;
					
				}

				//print_r($data);

				//print_r($result);

				$this->response($this->json($result), 200); // send user details
			}
			$this->response('',204);	// If no records "No Content" status
		} // workouts



		private function workout(){	
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			$id = (int)$this->_request['id'];
			if($id > 0){	
				$query="SELECT * FROM workouts where workoutNumber=$id";
				$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
				if($r->num_rows > 0) {
					$result = $r->fetch_assoc();	
					$this->response($this->json($result), 200); // send product details
				}
			}
			$this->response('',204);	// If no records "No Content" status
		} // product


		
		/*
		 *	Encode array into JSON
		*/
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		} // return data
	}
	
	// Initiiate Library
	
	$api = new API;
	$api->processApi();
?>