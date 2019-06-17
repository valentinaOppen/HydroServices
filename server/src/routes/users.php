<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

require_once 'AutentificadorJWT.php';
require_once '../vendor/autoload.php';

 $app->POST('/api/user/post', function (Request $req, Response $res) 
 {        
    $token="";
    $email = $req->getParam('email');
    $pass =  $req->getParam('password');    
    
    if( $email &&  $pass )
    {
        if(esValido($email,$pass))
        {
            $datos=array('usuario'=>$email,'clave'=>$pass);
            $token= AutentificadorJWT::CrearToken($datos);
            $retorno=array('datos'=> $datos, 'token'=>$token );
            $newResponse = $res->withJson( $retorno ,200); 
        }
        else
        {
        $retorno=array('err'=> "no es usuario valido" );
        $newResponse = $res->withJson( $retorno ,409); 
        }
    }else
    {
        $retorno=array('err'=> "Faltan los datos del usuario y su clave" );
        $newResponse = $res->withJson( $retorno  ,411); 
    }
 	  
    return $newResponse;
});


function esValido($email, $pass) 
{
      
    if($email=="admin@admin.com" && $pass=="1234")
    {
      return true;
    }
    else
    {
       return false;
    }
   
}

?>