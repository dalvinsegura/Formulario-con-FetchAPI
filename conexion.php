<?php
$link = 'mysql:host=localhost;dbname=login_apifetch';
$user = 'root';
$pass = '';

try {
    $dbh = new PDO($link, $user, $pass);
    // echo "CONECTADO";

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>

