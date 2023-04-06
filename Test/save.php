<?php
// Get the user data from the form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Create the CSV data
$data = array($name, $email, $phone);
$csvData = implode(',', $data) . "\n";

// Open the CSV file for appending
$filename = 'userdata.csv';
$file = fopen($filename, 'a');

// Write the CSV data to the file
fwrite($file, $csvData);

// Close the file
fclose($file);

// Redirect the user back to the form
header('Location: index.html');
exit();
?>
