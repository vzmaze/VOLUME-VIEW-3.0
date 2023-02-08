<?php
if(isset($_POST['name'])) {
    $name = $_POST['name'];
    $name = htmlspecialchars($name);
    $name = urldecode($name);
    $name = trim($name);
}
if(isset($_POST['email'])) {
    $email = $_POST['email'];
    $email = htmlspecialchars($email);
    $email = urldecode($email);
    $email = trim($email);
}
if(isset($_POST['message'])) {
    $message = $_POST['message'];
    $message = htmlspecialchars($message);
    $message = urldecode($message);
    $messgae = trim($message);
}
// echo $name;
// echo "<br>";
// echo $email;
// echo "<br>";
// echo $message;


$myemail = "vzmaze@gmail.com";

$mes = "Сообщение от посетителя сайта VolumeView!\nИмя: $name\nEmail: $email\nText: $message";

$sub='Message for VolumeView';
$send = mail ($myadress,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
