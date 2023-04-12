<?php
// Define the message content

$text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget enim eros. Praesent ultricies purus quis justo sollicitudin vestibulum. Donec congue vel risus sed ullamcorper. Nullam euismod vel nisl a viverra. Nam eu pharetra metus. Nam euismod est eget ex varius, in tempor velit porttitor. Vivamus vel ultricies elit. Donec eget elit tellus. Sed mollis sapien ac tellus pretium, vel luctus odio pharetra. Aliquam erat volutpat. Nulla vel blandit justo, a semper ipsum. Nam scelerisque risus at gravida molestie. Nullam feugiat magna quis ex rutrum, ac blandit mauris venenatis. Sed blandit lectus eget ex dignissim, a lacinia quam sagittis. Duis tincidunt consectetur urna sed bibendum. Nam id leo id ipsum tincidunt faucibus. Donec in risus vel sem eleifend gravida vitae et lorem.";
$text1 = "lorem"
echo $text1
echo "Nice"
// Define the HTML code for the message
$html = <<<HTML
  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">$title</h4>
    <hr>
    <p>$text</p>
  </div>
HTML;

// Output the HTML code
echo $html;
echo "My first PHP script!";
