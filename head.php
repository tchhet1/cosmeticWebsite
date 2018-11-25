<?php
//Step1
 $conn = mysqli_connect('localhost','root','root', 'Cosmetics');    
    if (!$conn){
        die('Error connecting to MySQL server.');
    }
//echo "connected successfully". "<br>";
    
$sql = "SElECT * ";
$sql .= "From Cosmetics";
$result = mysqli_query($conn, $sql);

if (!result){
    die("Database query failed");
}

?>
<!DOCTYPE html>
<html lang = "en-US">
<head>
    <title>Simply Cosmetics</title>
    <meta charset="UTF-8">
    <meta name="viewport" content = "width=device-width, initial-scale= 1">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/shopify-cartjs/0.4.1/cart.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
