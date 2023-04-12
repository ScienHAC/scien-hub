<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
header("Access-Control-Allow-Headers: *");
function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
    echo "You have CORS!";
}
// read the existing comments from the JSON file
$comments = json_decode(file_get_contents("https://scienhac.github.io/scien-hub/file.json"), true);

// get the comment ID from the request body
$id = json_decode(file_get_contents("php://input"), true);

// loop through the comments and find the one with the matching ID
foreach ($comments as $key => $comment) {
  if ($comment['id'] == $id) {
    // remove the comment from the array
    unset($comments[$key]);
  }
}

// write the updated comments back to the JSON file
file_put_contents("https://scienhac.github.io/scien-hub/file.json", json_encode(array_values($comments)));
?>
