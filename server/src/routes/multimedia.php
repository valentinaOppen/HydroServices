<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app->get('/api/videos', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM videos LIMIT 12";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $videos = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($videos));
        }
        else{
            echo json_encode("No existen videos en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});

$app->get('/api/videosAll', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM videos";
    try {
        $db = new db();
        $db = $db->connectDB();
        $result = $db->query($sql);
        if($result->rowCount() > 0)
        {
            $videos = $result->fetchAll(PDO::FETCH_OBJ);
            echo utf8_decode(json_encode($videos));
        }
        else{
            echo json_encode("No existen videos en la base de datos");
        }

        $resultado = null;
        $db = null;
    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});


$app->get('/api/video/{id}', function(Request $req, Response $res)
{    
    $id = $req->getAttribute('id');

    $sql = "SELECT * FROM videos WHERE video_id= $id";
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

$app->POST('/api/videos/savevideo', function(Request $req, Response $res)
{            
    $video_url = $req->getParam('video_url');  
    $video_desc = $req->getParam('video_desc');  
    $video_desc_eng = $req->getParam('video_desc_eng');  
       
    $sql = "INSERT INTO videos (video_url, video_desc, video_desc_eng) VALUES ('$video_url', '$video_desc', '$video_desc_eng')";        

    try {
        $db = new db();
        $db = $db->connectDB();        
        $result = $db->prepare($sql);           
        $result->execute();
        echo json_encode("Nuevo cliente guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});





$app->delete('/api/videos/delete/{id}', function(Request $req, Response $res)
{    
    $id = $req->getAttribute('id');
    
    $sql = "DELETE FROM videos WHERE video_id=$id";
    
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





$app->get('/api/photos', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM photos LIMIT 12";
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


$app->get('/api/photosAll', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM photos";
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


$app->get('/api/photo/{id}', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM photos WHERE photo_id= $id";
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

$app->POST('/api/photos/savephoto', function(Request $req, Response $res)
{            
    $data = $req->getParam('photo_url');   
    $img_name = $req->getParam('photo_name');
    $img_desc = $req->getParam('photo_desc');
    $img_desc_eng = $req->getParam('photo_desc_eng');

    if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
        $data = substr($data, strpos($data, ',') + 1);
        $type = strtolower($type[1]); // jpg, png, gif
    
        if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
            throw new \Exception('invalid image type');
        }
    
        $data = base64_decode($data);        
    
        if ($data === false) {
            throw new \Exception('base64_decode failed');
        }
    } else {
        throw new \Exception('did not match data URI with image data');
    }

    $urlImage = "../../../assets/img/MultimediaImgs/".$img_name.".".$type;
    
    file_put_contents('C:\xampp\htdocs\HydroServices\client\src\assets\img\MultimediaImgs\\'.$img_name.'.'.$type, $data);
    
    $sql = "INSERT INTO photos (photo_url, photo_name, photo_desc, photo_desc_eng) VALUES ('$urlImage','$img_name', '$img_desc', '$img_desc_eng')";        

    try {
        $db = new db();
        $db = $db->connectDB();        

        $result = $db->prepare($sql);    
        $result->execute();
        echo json_encode("Nuevo cliente guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});





$app->delete('/api/photos/delete/{id}', function(Request $req, Response $res)
{    
    $id = $req->getAttribute('id');
    
    $sql = "DELETE FROM photos WHERE photo_id=$id";
    
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

?>