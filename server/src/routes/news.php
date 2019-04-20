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

$app->POST('/api/news/new', function(Request $req, Response $res)
{
    $desc = $req->getParam('news_desc');
    $desc_eng = $req->getParam('news_desc_eng');
    $video = $req->getParam('news_video');
    $img = $req->getParam('news_img');
    
    $sql = "INSERT INTO news 
    (news_desc, news_desc_eng, news_video, news_img) 
    VALUES ('$desc', '$desc_eng', '$video', '$img')";
    
    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        $result->bindParam(':name', $name);        
        $result->execute();
        echo json_encode("Nuevo cliente guardado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});


$app->PUT('/api/news/edit/{id}', function(Request $req, Response $res)
{
    $id = $req->getAttribute('id');
    $desc = $req->getParam('news_desc');
    $desc_eng = $req->getParam('news_desc_eng');
    $video = $req->getParam('news_video');
    $img = $req->getParam('news_img');
            
    $sql = "UPDATE news SET 
    news_desc=$desc,
    news_desc_eng=$desc_eng,
    news_video=$video,
    news_img=$img
    WHERE news_id=$id";       
    
    try {
        $db = new db();
        $db = $db->connectDB();
        
        $result = $db->prepare($sql);
        $result->bindParam(':news_desc', $name);        
        $result->bindParam(':news_desc_eng', $name);        
        $result->bindParam(':news_video', $name);        
        $result->bindParam(':news_img', $name);        
        $result->execute();
        echo json_encode("Cliente modificado.");        
        $result = null;
        $db = null;

    } catch (PDOException $e) {
        echo '{"error : {"text:'.$e->getMessage().'}';
    }
});


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