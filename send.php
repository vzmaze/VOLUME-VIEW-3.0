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
<!-- <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо! Мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
<body>
<h1>Спасибо! Мы свяжемся с вами!</h1>
</body>
</html> -->