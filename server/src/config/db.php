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
        $mysqlConnect = "mysql:host=$this->dbHost;dbname=$this->dbName";
        $dbConnection = new PDO($mysqlConnect, $this->dbUser,$this->dbPass);
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);        
        return $dbConnection;
    }
}

?>