<?php
// get the URL to proxy
$url = $_GET['url'];

// create a cURL handle to the remote URL
$ch = curl_init($url);

// set the cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// send the request and get the response
$response = curl_exec($ch);

// set the Content-Type header to match the original response
header('Content-Type: ' . curl_getinfo($ch, CURLINFO_CONTENT_TYPE));

// output the response
echo $response;

// close the cURL handle
curl_close($ch);
?>
