<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

// $app = new \Slim\App;

$app->get('/api/achievements', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM achievements";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $achievements = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($achievements));
        }
        else{
            echo json_encode("No existen clientes en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->PUT('/api/achievements/edit', function(Request $req, Response $res)
{            
    $works = $req->getParam('achiv_works');
    $hours = $req->getParam("achiv_hours");
    $clients = $req->getParam("achiv_clients");
    $years = $req->getParam("achiv_years");

    $sql = "UPDATE achievements SET 
    achiv_works=$works,
    achiv_hours=$hours,
    achiv_clients=$clients,
    achiv_years=$years
    WHERE achiv_id='1'";        

    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        $result->bindParam(':name', $name);        
        $result->execute();
        echo json_encode("Cliente modificado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

