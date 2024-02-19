<?php 
    include("action.php");
    $db =new db;
    $db->conection();
    $tbl= "q_question";
    $data=array();
    $res= $db->select_data("*",$tbl,"ORDER BY id DESC");
    if($res !='0'){
        foreach($res as $row){
            $data[]=array(
                "id"=>$row[0],
                "Q_question"=>$row[1],
                "img"=>$row[2],
                "lang"=>$row[3],
                "od"=>$row[4],
            );  
        }
    }
    echo json_encode($data);
