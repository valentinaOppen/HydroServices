<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;



$app->get('/api/news', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM news";
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


$app->get('/api/new/{id}', function(Request $req, Response $res)
{    
    $id = $req->getAttribute('id');

    $sql = "SELECT * FROM news WHERE news_id= $id";
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

$app->get('/api/newsVideos', function(Request $req, Response $res)
{    
    $sql = "SELECT * FROM news WHERE news_video != ''";
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
    $sql = "SELECT * FROM news WHERE news_img != ''";
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

$app->POST('/api/news/savenews', function(Request $req, Response $res)
{        
    $desc = $req->getParam('news_desc');
    $desc_eng = $req->getParam('news_desc_eng');
    $video = $req->getParam('news_video');
    $data = $req->getParam('news_img');   
    $img_name = $req->getParam('news_img_name');

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

    $urlImage = "../../../assets/NewsImgs/".$img_name.".".$type;
    
    file_put_contents('C:\xampp\htdocs\HydroServices\client\src\assets\NewsImgs\\'.$img_name.'.'.$type, $data);
    
    $sql = "INSERT INTO news (news_desc, news_desc_eng, news_video, news_img, news_img_name) VALUES ('$desc', '$desc_eng', '$video', '$urlImage', '$img_name')";        

    try {
        $db = new db();
        $db = $db->connectDB();        

        $result = $db->prepare($sql);
        // $result->bindParam(':news_desc', $desc);        
        // $result->bindParam(':news_desc_eng', $desc_eng);        
        // $result->bindParam(':news_video', $video);        
        // $result->bindParam(':news_img', $data);        
        $result->execute();
        echo json_encode("Nuevo cliente guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});


// $app->PUT('/api/news/edit/{id}', function(Request $req, Response $res)
// {
//     $id = $req->getAttribute('id');
//     $desc = $req->getParam('news_desc');
//     $desc_eng = $req->getParam('news_desc_eng');
//     $video = $req->getParam('news_video');
//     $data = $req->getParam('news_img');

//     if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
//         $data = substr($data, strpos($data, ',') + 1);
//         $type = strtolower($type[1]); // jpg, png, gif
    
//         if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
//             throw new \Exception('invalid image type');
//         }
    
//         $data = base64_decode($data);
    
//         if ($data === false) {
//             throw new \Exception('base64_decode failed');
//         }
//     } else {
//         throw new \Exception('did not match data URI with image data');
//     }
        
//     file_put_contents('C:\xampp\htdocs\HydroServices\client\src\assets\NewsImgs\image.png', $data);
            
//     $sql = "UPDATE news SET 
//     news_desc=$desc,
//     news_desc_eng=$desc_eng,
//     news_video=$video,
//     news_img=$data
//     WHERE news_id=$id";       
    
//     try {
//         $db = new db();
//         $db = $db->connectDB();
        
//         $result = $db->prepare($sql);
//         $result->bindParam(':news_desc', $name);        
//         $result->bindParam(':news_desc_eng', $name);        
//         $result->bindParam(':news_video', $name);        
//         $result->bindParam(':news_img', $name);        
//         $result->execute();
//         echo json_encode("Cliente modificado.");        
//         $result = null;
//         $db = null;

//     } catch (PDOException $e) {
//         echo '{"error : {"text:'.$e->getMessage().'}';
//     }
// });


$app->delete('/api/news/delete/{id}', function(Request $req, Response $res)
{    
    $id = $req->getAttribute('id');
    
    $sql = "DELETE FROM news WHERE news_id=$id";
    
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