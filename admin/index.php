<?php 
session_start();
session_destroy();
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
    <title>Login</title>
</head>
<body>

    <div class="container-fluid">
    <div class="popup" >
        <div class="loading">
            <i class="fas fa-spinner fa-pulse"></i>
        </div>
    </div>
        <div class="row">
            <div class="col-sm-12">
                <form class="frm">
                    
                    <input type="email" placeholder="Email" name="Email" id="Email" class="input">
                    <input type="password" placeholder="Password" name="Password" id="Password" class="input">
                    <input type="button" value="Login" class="btn" id="BtnLog">

                </form>
            </div>
        </div>
    </div>

</body>
</html>