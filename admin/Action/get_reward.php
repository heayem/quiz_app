<?php 
    include("action.php");
    $db =new db;
    $db->conection();
    $tbl= "reward";
    $data=array();
    $res= $db->select_data("*",$tbl,"ORDER BY id DESC");
    if($res !='0'){
        foreach($res as $row){
            $data[]=array(
                "id"=>$row[0],
                "title"=>$row[1],
                "img"=>$row[2],
                "cate_answer"=>$row[3],
            );  
        }
    }
    echo json_encode($data);
