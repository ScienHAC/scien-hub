<?php
header("Access-Control-Allow-Origin: *");
// read the comments from the JSON file
$comments = json_decode(file_get_contents("https://scienhac.github.io/scien-hub/file.json"), true);

// return the comments as a JSON response
header("Content-Type: application/json");
echo json_encode($comments);
?>
