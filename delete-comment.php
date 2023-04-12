<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
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
