<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz web</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

  <link rel="stylesheet" href="./style/style.css">
  <script src="./js/action.js"></script>
</head>

<body>
       <?php include("./loading.style/Loading.php"); ?>
       

       <div class="container main">
          <div class="row">
             <div class="col-sm-12 title"> 
                <h1> សូមស្វាគមន៏ មកកាន់ ការសាកល្បងឆ្លើយសំណួរ </h1>
             </div>

             <div class="col-sm-12 item"> 
                <i class="fa-solid fa-question"></i>
                <button class="btn" data-option="1"> ចាប់ផ្ដើម​ លេង </button> 
             </div>

             <div class="col-sm-12 item"> 
               <select name="" id="lang" class="select">
                  <option value="1" class="option1"> ភាសាខ្មែរ  </option>
                  <option value="2" class="option2"> ភាសាអងគ្លេស  </option>
               </select>
                
             </div>

          </div>
       </div>



</body>

</html>