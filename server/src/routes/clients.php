<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use slim\slim\Slim\Http\UploadedFile;

// $app = new \Slim\App;

$container = $app->getContainer();
$container['upload_directory'] =  'api/clients/uploads';

$app->get('/api/clients', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM clients";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $clients = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($clients));
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

$app->POST('/api/clients/new', function(Request $req, Response $res)
{           
    $name = $req->getParam('clie_name');
    $data = $req->getParam('clie_img');    

    // $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));

    if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) 
    {
        $data = substr($data, strpos($data, ',') + 1);
        $type = strtolower($type[1]); // jpg, png, gif
    
        if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) 
        {
            throw new \Exception('invalid image type');
        }
    
        $data = base64_decode($data);
    
        if ($data === false) {
            throw new \Exception('base64_decode failed');
        }
    } 
    else 
    {
        throw new \Exception('did not match data URI with image data');
    }    
    
    $urlImage = "../../../assets/clientsImgs/".$name.".".$type;
    file_put_contents('C:\xampp\htdocs\HydroServices\client\src\assets\clientsImgs\\'.$name.'.'.$type, $data);
        
    $sql = "INSERT INTO clients (clie_name, clie_img) VALUES ('$name', '$urlImage')";
    
    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        echo $sql;
        // $result->bindParam(':name', $name);    
        // $result->bindParam(':img',$img);
        $result->execute();
        echo json_encode("Nuevo cliente guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->delete('/api/clients/delete/{id}', function(Request $req, Response $res)
{
    $id = $req->getAttribute('id');       

    $sql = "DELETE FROM clients WHERE clie_id=$id";        

    try 
    {
        $db = new db();
        $db = $db->connectDB();        
        $result = $db->prepare($sql);        
        $result->execute();
        if($result->rowCount() > 0)
        {
            echo json_encode("Cliente eliminado.");
        }
        else{
            echo json_encode("No existen clientes con este ID.");
        }
                        
    } 
    catch (PDOException $e) 
    {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
    
    $result = null;
    $db = null;
});


