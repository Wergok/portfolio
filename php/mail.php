<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';
require 'phpMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;
// $mail->SMTPDebug = 2;
$mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
};

$mail->Host       = 'smtp.mail.ru';
$mail->Username   = 'website08';
$mail->Password   = 'bVn1kHUeXDdkct8ssLZt';
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;
$mail->setFrom('website08@mail.ru', 'Ярослав');

$mail->addAddress('id.zoo@mail.ru');

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

if ($text === "") {
    $text = "Не указан";
}

$title = "Письмо от закачика";
$body = "<h4>Данные клиента</h4>
        <p>Имя: $name</p>
        <p>Почта: $email</p>
        <p>Сообщение: $text</p>
";

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

if ($mail->send()) {
    $message = "Данные отправлены!";
} else {
    $message = "ошибка";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
