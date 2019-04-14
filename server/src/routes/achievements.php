<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

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

// $app->PUT('/api/achievements/edit/{id}', function(Request $req, Response $res)
// {
//     $id = $req->getAttribute('id');
//     $name = $req->getParam('name');
//     $sql = "UPDATE achievements SET clie_name=:name WHERE clie_id=$id";
    
//     try {
//         $db = new db();
//         $db = $db->connectDB();
        
//         $result = $db->prepare($sql);
//         $result->bindParam(':name', $name);        
//         $result->execute();
//         echo json_encode("Cliente modificado.");        
//         $result = null;
//         $db = null;

//     } catch (PDOException $e) {
//         echo '{"error : {"text:'.$e->getMessage().'}';
//     }
// });

