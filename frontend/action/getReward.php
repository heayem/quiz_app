<?php
include("action.php");
$db = new db;
$db->conection();
$tbl= "reward";
$id = $_POST['id'];
// $Category = $_POST['Category'];
$data=array();

$res= $db->select_data("name,img",$tbl,"WHERE cate_answer=$id LIMIT 1");

if($res !='0'){
    foreach($res as $row){
        $data[]=array( 
            "name"=>$row[0],
            "img"=>$row[1],
        );  
    }
}

echo json_encode($data);