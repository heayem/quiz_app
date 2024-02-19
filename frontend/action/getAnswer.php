<?php
include("action.php");
$db = new db;
$db->conection();
$tbl= "tb_answer";
$Category = $_POST['Category'];
$data=array();

$res= $db->select_data("answer,status,id",$tbl,"WHERE Category=$Category");

if($res !='0'){
    foreach($res as $row){
        $data[]=array( 
            "an"=>$row[0],
            "status"=>$row[1],
            "id"=>$row[2]
        );  
    }
}

echo json_encode($data);