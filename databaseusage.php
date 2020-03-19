<?php

require_once "DB_fnk.php";

// lisame kasutusele kasutaja andmed, et saaks ühendada
require_once "DB.php";

require_once "valjund.php";

// ühendus serveris oleva andmebaasiga
$ikt = connect(HOST, USER, PASS, DBNAME);

$sql = 'SELECT * FROM Kliendid';

$result = query($sql, $ikt);

    //Andmete kustutamine
    if(!empty($_GET['kustutaID'])){
        $id = $_GET['kustutaID'];
        $paring = "DELETE FROM Kliendid WHERE id=".$id."";
        $conn->query($paring);
        header('Location: h06.php');
    }
?>
    <!DOCTYPE html>
    <html lang="et">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHP OOP</title>
        <link rel="stylesheet" href="includes/style.css">
    </head>

    <body>
        <h1>Database usage</h1>
        <table>
            <tr>
                <th>Eesnimi</th>
                <th>Perenimi</th>
                <th>Kontakt</th>
                <th>Kustuta</th>
            </tr>
            <?php
        while($row = $result->fetch_assoc()){
           echo "<tr><td>".$row['enimi']."</td>
                <td>".$row['pnimi']."</td>
                <td>".$row['kontakt']."</td>
                <td><a href='?kustutaID=".$row['id']."' onclick='return confirm(\"Oled kindel?\");' >Kustuta</a></td></tr>";
        }
    ?>
        </table>
        <?php $conn->close(); ?>
    </body>
</html>