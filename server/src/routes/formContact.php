<?php

    require("PHPMailer/class.phpmailer.php");
    use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

    $nombre = $_POST['name'];
    $mail = $_POST['email'];
    $telef = $_POST['phone'];
    $asunto = $_POST['subject'];
    $comentario = $_POST['message'];

    echo $nombre;

    $mail = new PHPMailer(); // create a new object
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "hydroservice.div@gmail.com";
    $mail->Password = "hydro2019";
    $mail->SetFrom("hydroservice.div@gmail.com");
    $mail->Subject = $asunto;
    $mail->Body = "hello" . PHP_EOL . "cosas";
    $mail->AddAddress("hydroservice.div@gmail.com");
    
     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent<br/>".$nombre."<br/>nombre";
     }    

?>