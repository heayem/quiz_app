<?php session_start();
$U_Ip = $_SERVER['REMOTE_ADDR'];

if (!isset($_SESSION['login']) || $_SESSION['login'] == false) {
    header('Location: http://www.example.com/');
} else {
    if($U_Ip != $_SESSION['ip']){
            if(!isset($_SESSION['UserName'])){
                header('Location: http://www.example.com/');
            }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js"></script>

    <link rel="stylesheet" href="css/admin.css">
    <script src="js/admin.js"></script>
    <title> Admin </title>
</head>

<body>
    <?php include("file/Header.php") ?>
    <?php include("file/body.php") ?>
    <div class="popup">
        <div class="loading">
            <i class="fas fa-spinner fa-pulse"></i>
        </div>
    </div>


</body>

</html>