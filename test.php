<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
      <meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="expires" content="0">
    <meta name="viewport" content="initial-scale = 1.0, user-scalable=no, width=device-width">
</head>
<body>

	<h1>hello</h1>

<?php

// $array = [
//     array("exerciseName" => "Bicep curl"),
//     array("exerciseName" => "Chin-up"),
// ];


// // $array = serialize($array);

// // print_r($array);

// $newArray = json_encode($array);



// $products = array( array( "TIR", "Tires", 100 ),
//           array( "OIL", "Oil", 10 ),
//           array( "SPK", "Spark Plugs", 4 ) );


// $products_length = count($products);
// $products_cols_length = count($products[0]);


// for ( $row = 0; $row < $products_length; $row++ )
// 	{
// 		 for ( $column = 0; $column < $products_cols_length; $column++ )
// 			 {
// 			  	echo "|".$products[$row][$column];
// 			 }
// 		 echo "|<BR>";
// 	}


$array = json_decode([{"exerciseName":"Zercher Squats","muscleGroup":"Quadriceps"},{"exerciseName":"Zottman Preacher Curl","muscleGroup":"Biceps"}]);

print_r($array);




?>


     
</body>
</html>