<div class="container Body">
    <?php
    if (isset($_GET['show'])) {
        include("show.php");   
    }else if(isset($_GET['user'])){
        include("user.php");
    }
    else{

    ?>
    <div class="row">
        <!-- input question -->
        <div class="col-lg-4 ">
            <div class="box bg-primary ">
                <i data-opt="1"  class="fa-solid fa-circle-plus i"> </i>
                <h1>Input Question </h1>
            </div>
        </div>
        <!-- input answer -->
        <div class="col-lg-4 ">
            <div class="box bg-info ">
                <i data-opt="2"  class="fa-solid fa-circle-plus i"> </i>
                <h1>Input Answer</h1>
            </div>
        </div>
        <!-- show Q&A -->
        <div class="col-lg-4 ">
            <div class="box bg-success ">
            <a href="admin.php?show=1" class="a"><i class="fa-solid fa-folder-open"></i></a>
                <h1>Show Question & Answer</h1>
            </div>
        </div>
        <!-- Input Reward -->
        <div class="col-lg-4  ">
            <div class="box bg-dark ">
                <i data-opt="3" id="aforwd" class="fa-solid fa-circle-plus i"></i>
                <h1> Reward </h1>
            </div>
        </div>
        <!-- User admin -->
        <div class="col-lg-4  ">
            <div class="box bg-danger">
           <a  class="a i" data-opt="4"> <i class="fa-solid fa-user-gear"></i> </a> 
                <h1> Create User </h1>
            </div>
        </div>
        <!-- User client -->
        <div class="col-lg-4  ">
            <div class="box bg-secondary ">
            <i class="fa-solid fa-users"></i>
                <h1> User client </h1>
            </div>
        </div>
    </div>

</div>
<?php  } 
?>