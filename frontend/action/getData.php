<?php
include("action.php");
$db = new db;
$db->conection();
$tbl= "q_question";
$langauge = $_POST['langauge'];
$data=array();
$res= $db->select_data("Q_question,img,id",$tbl,"WHERE lang=$langauge ORDER BY RAND() LIMIT 1");
if($res !='0'){
    
    foreach($res as $row){
        $data[]=array( 
            "Q_question"=>$row[0],
            "img"=>$row[1],
            "id"=>$row[2],
        );  
    }
   
}

echo json_encode($data);