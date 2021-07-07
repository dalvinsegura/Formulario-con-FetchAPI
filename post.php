<?php
include 'conexion.php';

$sql = "INSERT INTO users (user, pass) VALUES (?,?)";
$statement = $dbh->prepare($sql);

$user = $_POST['usuario'];
$pass = $_POST['pass'];

if($user === '' || $pass === ''){
    echo json_encode('error');
}else{
    echo json_encode('<br>Usuario: '.$user.'<br>Pass: '.$pass);
};

$statement->execute(array($user,$pass)
);



