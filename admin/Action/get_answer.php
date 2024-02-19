<?php 
    include("action.php");
    $db =new db;
    $db->conection();
    $tbl= "tb_answer";
    $data=array();
    $res= $db->select_data("*",$tbl,"ORDER BY id DESC");
    if($res !='0'){
        foreach($res as $row){
            $data[]=array(
                "id"=>$row[0],
                "answer"=>$row[1],
                "status"=>$row[2],
                "category_question"=>$row[3],
            );  
        }
    }
    echo json_encode($data);