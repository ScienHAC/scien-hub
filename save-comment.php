// read the existing comments from the JSON file
$comments = json_decode(file_get_contents("https://scienhac.github.io/scien-hub/file.json"), true);

// get the comment data from the request body
$comment = json_decode(file_get_contents("php://input"), true);

// add the new comment to the comments array
$comments[] = $comment;

// write the comments back to the JSON file
file_put_contents("comments.json", json_encode($comments));
