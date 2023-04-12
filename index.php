<?php
// Define the alert message and type
$message = "This is an alert message.";
$type = "success"; // can be "success", "info", "warning", or "danger"

// Define the HTML code for the alert
$html = <<<HTML
  <div class="alert alert-$type" role="alert">
    $message
  </div>
HTML;

// Output the HTML code
echo $html;
?>
