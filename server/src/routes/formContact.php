<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require '../vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);


    $app->POST('/api/contact', function(Request $req, Response $res)
    { 
        $nombre = $req->getParam('name');
        $email = $req->getParam('email');
        $telef = $req->getParam('phone');
        $asunto = $req->getParam('subject');
        $comentario = $req->getParam('message');        

        $mail = new PHPMailer(true);
        
        try {
            //Server settings
            $mail->SMTPDebug = 2;                                       // Enable verbose debug output
            $mail->isSMTP();                                            // Set mailer to use SMTP
            $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'hydroservice.div@gmail.com';                     // SMTP username
            $mail->Password   = 'hydro2019';                               // SMTP password
            $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to
        
            //Recipients
            $mail->setFrom('hydroservice.div@gmail.com', 'Mailer');
            $mail->addAddress('hydroservice.div@gmail.com', 'Joe User');     // Add a recipient                
            $mail->addReplyTo('hydroservice.div@gmail.com', 'Information');                            
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Here is the subject';
            
            $body = 
            "<br/>Nombre: "  . $nombre    . 
            "<br/>Email: "   . $email   . 
            "<br/>Celular: " . $telef . 
            "<br/>"           . $comentario;
            
            $mail->Body    = $body;            

            
        
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }       
    });
?>