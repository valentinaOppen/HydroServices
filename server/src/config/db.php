<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class db
{
    private $dbHost = 'localhost';
    private $dbUser = 'root';
    private $dbPass = '';
    private $dbName = 'hydroservices_db';

    public function connectDB()
    {
        $mysqlConnect = "mysql:host=$this->dbHost;dbname=$this->dbName;charset=utf8";
        $dbConnection = new PDO($mysqlConnect, $this->dbUser,$this->dbPass);
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
        $dbConnection->exec("SET CHARACTER SET utf8");
        return $dbConnection;
    }

    // $this->objetoPDO = new PDO('mysql:host=localhost;dbname=cdcol;charset=utf8', 'root', '', array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    //         $this->objetoPDO->exec("SET CHARACTER SET utf8");
}

?>