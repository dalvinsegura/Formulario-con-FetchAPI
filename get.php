<?php

include 'conexion.php';

    $sql = 'SELECT * FROM users';

    $statement = $dbh->prepare($sql);
    $statement->execute();
    $resultado = $statement->fetchAll();

    // var_dump($resultado)
    
    $resultado_json = json_encode($resultado);
    
    echo $resultado_json;
?>