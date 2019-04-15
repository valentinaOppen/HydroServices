<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

// $app = new \Slim\App;

$app->get('/api/newsVideos', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM news WHERE news_img = ''";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $news = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($news));
        }
        else{
            echo json_encode("No existen novedades en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->get('/api/newsImages', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM news WHERE news_video = ''";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $news = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($news));
        }
        else{
            echo json_encode("No existen novedades en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

// $app->POST('/api/news/new', function(Request $req, Response $res)
// {
//     $name = $req->getParam('name');
//     $sql = "INSERT INTO news (clie_name) VALUES (:name)";
    
//     try {
//         $db = new db();
//         $db = $db->connectDB();
        
//         $result = $db->prepare($sql);
//         $result->bindParam(':name', $name);        
//         $result->execute();
//         echo json_encode("Nuevo cliente guardado.");        
//         $result = null;
//         $db = null;

//     } catch (PDOException $e) {
//         echo '{"error : {"text:'.$e->getMessage().'}';
//     }
// });

// $app->PUT('/api/clients/edit/{id}', function(Request $req, Response $res)
// {
//     $id = $req->getAttribute('id');
//     $name = $req->getParam('name');
//     $sql = "UPDATE clients SET clie_name=:name WHERE clie_id=$id";
    
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

// $app->delete('/api/clients/delete/{id}', function(Request $req, Response $res)
// {
//     $id = $req->getAttribute('id');
    
//     $sql = "DELETE FROM clients WHERE clie_id=$id";
    
//     try 
//     {
//         $db = new db();
//         $db = $db->connectDB();        
//         $result = $db->prepare($sql);        
//         $result->execute();
//         if($result->rowCount() > 0)
//         {
//             echo json_encode("Cliente eliminado.");
//         }
//         else{
//             echo json_encode("No existen clientes con este ID.");
//         }
                        
//     } 
//     catch (PDOException $e) 
//     {
//         echo '{"error : {"text:'.$e->getMessage().'}';
//     }
    
//     $result = null;
//     $db = null;
// });