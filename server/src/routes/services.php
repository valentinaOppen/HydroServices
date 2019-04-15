<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

// $app = new \Slim\App;

$app->get('/api/services', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM services";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);        
        if($result->rowCount() > 0)
        {
            $services = $result->fetchAll(PDO::FETCH_OBJ);            
            echo utf8_decode(json_encode($services));       
                            
        }
        else{
            echo json_encode("No existen servicios en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->POST('/api/services/new', function(Request $req, Response $res)
{
    $name = $req->getParam('name');
    $image = $req->getParam('image');
    $sql = "INSERT INTO services (serv_name, serv_img) VALUES (:name, :image)";
    
    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        $result->bindParam(':name', $name);        
        $result->bindParam(':image', $image);
        $result->execute();
        echo json_encode("Nuevo servicio guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->PUT('/api/services/edit/{id}', function(Request $req, Response $res)
{
    $id = $req->getAttribute('id');
    $name = $req->getParam('name');
    $image = $req->getParam('image');
    $sql = "UPDATE services SET serv_name=:name, serv_img=:image WHERE serv_id=$id";
    
    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        $result->bindParam(':name', $name); 
        $result->bindParam(':image', $image);        
        $result->execute();
        echo json_encode("Servicio modificado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->delete('/api/services/delete/{id}', function(Request $req, Response $res)
{
    $id = $req->getAttribute('id');
    
    $sql = "DELETE FROM services WHERE serv_id=$id";
    
    try 
    {
        $db = new db();
        $db = $db->connectDB();        
        $result = $db->prepare($sql);        
        $result->execute();
        if($result->rowCount() > 0)
        {
            echo json_encode("Servicio eliminado.");
        }
        else{
            echo json_encode("No existen servicios con este ID.");
        }
                        
    } 
    catch (PDOException $e) 
    {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
    
    $result = null;
    $db = null;
});